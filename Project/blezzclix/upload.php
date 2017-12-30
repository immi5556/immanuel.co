<?php 

 //importing dbdetails file 

 require_once 'dbdetails.php';
 
 //this is our upload folder 
 $upload_path = 'uploads/';
 $server_ip = gethostbyname(gethostname());
  //creating the upload url 
 $upload_url = 'https://www.immanuel.co/blezzclix/'.$upload_path; 
  //response array 
 $response = array(); 
 

 if($_SERVER['REQUEST_METHOD']=='POST'){
     //checking the required parameters from the request 
    //if(isset($_POST['name']) and isset($_FILES['image']['name'])){
    if(isset($_FILES['image']['name'])){
    //if(isset($_POST['image'])){
        //connecting to the database 
        $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
        if (mysqli_connect_errno()) {
            $response['conerror']= "Failed to connect to MySQL: " . mysqli_connect_error();
        }
 
        //getting name from the request 
        $name = $_POST['name'];
 
        //getting file info from the request 
        $fileinfo = pathinfo($_FILES['image']['name']);
 
        //getting the file extension 
        $extension = $fileinfo['extension'];
 
        //file url to store in the database 
        $file_url = $upload_url . getFileName() . '.' . $extension;
 
        //file path to upload in the server 
        $file_path = $upload_path . getFileName() . '.'. $extension; 
 
        //trying to save the file in the directory 
        try{
            //saving the file 
            move_uploaded_file($_FILES['image']['tmp_name'],$file_path);
            $sql = "INSERT INTO blessclix_images (url, title) VALUES ('$file_url', '$name');";
            $result = mysqli_query($con,$sql);
            //adding the path and name to database 
            if($result){
            //filling response array with values 
                $response['error'] = false; 
                $response['url'] = $file_url; 
                $response['name'] = $name;
            }
            else {
                $response['error'] = mysqli_errno($con) ; 
                $response['url'] = $file_url; 
                $response['name'] = $name;
            }
            //if some error occurred 
        }catch(Exception $e){
            $response['error']=true;
            $response['message']=$e->getMessage();
        } 
 
        //closing the connection 
        mysqli_close($con);
    }else{
        $response['error']=true;
        $response['method']=isset($_POST['name']);
        $response['message']='Please choose a file';
    }
 }
 
 
        //displaying the response 
        echo json_encode($response);
 
 /*
 We are generating the file name 
 so this method will return a file name for the image to be upload 
 */
 function getFileName(){
    $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
    $sql = "SELECT max(id) as id FROM blessclix_images";
    $result = mysqli_fetch_array(mysqli_query($con,$sql));
 
    mysqli_close($con);
    if($result['id']==null)
        return 1; 
    else 
        return ++$result['id']; 
}
?>