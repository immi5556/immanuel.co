<?php 

 //importing dbdetails file 

 require_once 'dbdetails.php';
 
 //this is our upload folder 
 $upload_path = 'uploads/';
 $server_ip = gethostbyname(gethostname());
 //response array 
 $response = array(); 
 

 if($_SERVER['REQUEST_METHOD']=='POST'){
     //checking the required parameters from the request 
    //if(isset($_POST['name']) and isset($_FILES['image']['name'])){
    if(isset($_POST['action'])){
        //connecting to the database 
        $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
        if (mysqli_connect_errno()) {
            $response['conerror']= "Failed to connect to MySQL: " . mysqli_connect_error();
        }
 
        $action = $_POST['action'];
        //trying to save the file in the directory 
        try{
            $sql = "";
            if ($action == 'new'){
                $author = "author" . getUniqueId();
                $url = "http://immanuel.co/blezzclix/uploads/anony.png";
                $deviceid = getGUID();
                $sql = "INSERT INTO blessclix_downloads (author, deviceid, url) VALUES ('".$author."','".$deviceid."','".$url."');";
                $result = mysqli_query($con,$sql);
                $sql = "select * from blessclix_downloads where deviceid = '$deviceid' LIMIT 1;";
                $result = mysqli_query($con,$sql);
                $response['error'] = false; 
                $response['url'] = $url; 
                $response['author'] = $author;
                $response['deviceid'] = $deviceid;
                $response['downloadid'] = $i['downloadid'];
                $response['createdat'] = $i['createdat'];
            }
            if ($action == 'update'){
                $author = $_POST['author'];
                $url = $_POST['url'];
                $deviceid = $_POST['deviceid'];
                $sql = "UPDATE blessclix_downloads set author = '".$author."', url = '".$url."' where deviceid = '".$deviceid."';";
                $result = mysqli_query($con,$sql);
                $sql = "select * from blessclix_downloads where deviceid = '$deviceid' LIMIT 1;";
                $result = mysqli_query($con,$sql);
                $response['error'] = false; 
                $response['url'] = $url; 
                $response['author'] = $author;
                $response['deviceid'] = $deviceid;
                $response['downloadid'] = $i['downloadid'];
                $response['createdat'] = $i['createdat'];
            }

        }catch(Exception $e){
            $response['error']=true;
            $response['message']=$e->getMessage();
        } 
 
        //closing the connection 
        mysqli_close($con);
    }else{
        $response['error']=true;
        $response['method']=isset($_POST['action']);
        $response['message']='Please choose a file';
    }
 }
 
 
        //displaying the response 
        echo json_encode($response);
 
 /*
 We are generating the file name 
 so this method will return a file name for the image to be upload 
 */
 function getUniqueId(){
    $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
    $sql = "SELECT max(downloadid) as id FROM blessclix_downloads";
    $result = mysqli_fetch_array(mysqli_query($con,$sql));
 
    mysqli_close($con);
    if($result['id']==null)
        return 1; 
    else 
        return ++$result['id']; 
}

function getGUID(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = ''; // chr(45);// "-"
        $uuid = '' //chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12);
            //.chr(125);// "}"
        return $uuid;
    }
}

?>