<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <?php

    /* Attempt MySQL server connection. */

    $link = mysqli_connect("localhost", "root", "password", "test");

     

    // Check connection

    if($link === false){

        die("ERROR: Could not connect. " . mysqli_connect_error());

    }

    $quizName = mysqli_real_escape_string($link, $_POST["quizName"]);
	$quizName = str_replace(" ","_","$quizName");
	
	
	$sql1 = "create table $quizName (s int(2),q varchar(50), a1 varchar(50), a2 varchar(50), a3 varchar(50), a4 varchar(50), ra int(1))";
	mysqli_query($link, $sql1);	
	
	$sql2 = "insert into all_tests (name) values ('$quizName')";	
	mysqli_query($link, $sql2);	


    // Escape user inputs for security
    
	for($x=0;;$x++) {
		
    $q = mysqli_real_escape_string($link, $_POST["q"."$x"]);
    
	$a1 = mysqli_real_escape_string($link, $_POST["a1"."$x"]);

    $a2 = mysqli_real_escape_string($link, $_POST["a2"."$x"]);
    
	$a3 = mysqli_real_escape_string($link, $_POST["a3"."$x"]);
	
	$a4 = mysqli_real_escape_string($link, $_POST["a4"."$x"]);
	
	$a = mysqli_real_escape_string($link, $_POST["a"."$x"]);
	
    // attempt insert query execution

	
	$sql = "INSERT INTO $quizName (s, q, a1, a2, a3, a4, ra) VALUES ($x,'$q', '$a1' , '$a2', '$a3', '$a4', $a)";

	

    if(mysqli_query($link, $sql)){
		
        continue; 

    } else{

        break;

    }
	}
    echo "<center>Done!</center>";
    echo "<center><input class=btn type=button class=btn value='Go Home' onClick=window.location.href='index.php'></center>";

    // close connection

    mysqli_close($link);


	
    ?>

</body>
</html>