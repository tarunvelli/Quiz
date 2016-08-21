<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>

    <?php
	
	$servername = "localhost";
	$username = "root";
	$password = "password";
	$dbname = "test";

	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
	}

	$tab = $conn->real_escape_string($_POST['table']);
	
	$name = $conn->real_escape_string($_POST['name']);

    $rollNo = $conn->real_escape_string($_POST['rollNo']);

    $stream = $conn->real_escape_string($_POST['stream']);
    
	$college = $conn->real_escape_string($_POST['college']);
	
	$sql="select count(s) from $tab";
	$r= $conn->query($sql);
	
	if ($r->num_rows > 0) {
     // output data of each row
     while($row = $r->fetch_assoc()) {
     	$length= $row["count(s)"];
	 }
	}
	
	$sql="select * from $tab";
	$r= $conn->query($sql);
	
	if ($r->num_rows > 0) {
     $i=0;
     while($row = $r->fetch_assoc()) {
     	$ans[$i]= $row["ra"];
		$q[$i] = $conn->real_escape_string($_POST["q$i"]);
		$i++;
	 }
	}

	$s = 0;
	
	$length = count($ans);
	
	for ($i = 0; $i < $length; $i++) {
    	if ($ans[$i] == $q[$i]) $s++;
	} 
   
    // attempt insert query execution

	
	$sql = "INSERT INTO results (name, rno, stream, college, score, quiz) VALUES ('$name', $rollNo , '$stream', '$college', $s, '$tab')";

    if($conn->query($sql)){

        echo "<center>Records added successfully.</center>";

    } else{

        echo "ERROR: Could not able to execute $sql. " . $conn->error();

    }

     echo "<center><input class=btn type=button value='Go Home' onClick=window.location.href='index.php'></center>";


    // close connection

	$conn->close();	

	
    ?>
	</body>
</html>
