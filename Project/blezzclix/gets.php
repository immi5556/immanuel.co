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
            if ($action == 'getfirst'){
                $deviceid = $_POST['deviceid'];
                $sql = "select * from blessclix_downloads where deviceid = '$deviceid' LIMIT 1;";
                $fetch = mysqli_query($con, $sql);
                while($i = mysqli_fetch_array($fetch)) {
                   $response['error'] = false ; 
                    $response['url'] = $i['url']; 
                    $response['author'] = $i['author'];
                    $response['deviceid'] = $i['deviceid'];
                    $response['downloadid'] = $i['downloadid'];
                    $response['createdat'] = $i['createdat'];
                }
            }
            
            if ($action == 'getmypics'){
                $deviceid = $_POST['deviceid'];
                $resp = array();
                $sql = "select * from blessclix_images where deviceid = '$deviceid' LIMIT 10;";
                $fetch = mysqli_query($con, $sql);
                $response['error'] = false ; 
                while($i = mysqli_fetch_array($fetch)) {
                    $row = array();
                    $row['id'] = $i['id']; 
                    $row['url'] = $i['url']; 
                    $row['title'] = $i['title'];
                    $row['author'] = $i['author'];
                    $row['deviceid'] = $i['deviceid'];
                    $row['createdat'] = $i['createdat'];
                    array_push($resp, $row);
                }
                $response['mypics'] = $resp;
            }
            
            if ($action == 'getotherpics'){
                $deviceid = $_POST['deviceid'];
                $resp = array();
                $sql = "select distinct deviceid  from blessclix_images where deviceid !='$deviceid' ORDER BY 1 DESC  LIMIT 10;";
                $fetch = mysqli_query($con, $sql);
                $devicerow = array();
                while($i = mysqli_fetch_array($fetch)) {
                    $row = array();
                    $row['deviceid'] = $i['deviceid'];
                    $devvi = $row['deviceid'];
                    $sql1 = "select * from blessclix_downloads where deviceid = '$devvi' LIMIT 1;";
                    $fetch1 = mysqli_query($con, $sql1);
                    while($i1 = mysqli_fetch_array($fetch1)) {
                       $row['url'] = $i1['url'];
                       $row['author'] = $i1['author'];
                       $row['deviceid'] = $i1['deviceid'];
                       $row['downloadid'] = $i1['downloadid'];
                       $row['createdat'] = $i1['createdat'];  
                    }
                    array_push($devicerow, $row);
                }
                foreach ($devicerow as $device) {
                    $devid = $device["deviceid"];
                    $devurl = $device["url"];
                    $resprow["deviceid"] = $device["deviceid"];
                    $resprow["url"] = $device["url"];
                    $resprow["author"] = $device["author"];
                    $resprow["downloadid"] = $device["downloadid"];
                    $resprow["createdat"] = $device["createdat"];
                    $resprow["otherpics"] = array();
                    $sql = "select * from blessclix_images where deviceid = '$devid' and url != '$devurl' LIMIT 10;";
                    $fetch = mysqli_query($con, $sql);
                    while($i = mysqli_fetch_array($fetch)) {
                        $row = array();
                        $row['id'] = $i['id']; 
                        $row['url'] = $i['url']; 
                        $row['title'] = $i['title'];
                        $row['author'] = $i['author'];
                        $row['deviceid'] = $i['deviceid'];
                        $row['createdat'] = $i['createdat'];
                        array_push($resprow["otherpics"], $row);
                    }
                    array_push($resp, $resprow);
                }
                $response['error'] = false ; 
                $response['otherpics'] = $resp;
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