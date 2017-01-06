<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
	<center>
		<form action="results2.php" method="post">

			<?php

			$servername = "localhost";
			$username = "root";
			$password = "password";
			$dbname = "test";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}

			$sql = "SELECT name FROM all_tests";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {

				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo "<input type='submit' class=btn name = 'dbtable' value = '". $row["name"]."'><br>";
				}
			}
			else {
				echo "0 results";
			}

			$conn->close();
			?>
		</form>
		<input class=btn type=button value='Go Home' onClick=window.location.href='../index.php'>
	</center>
</body>
</html>
