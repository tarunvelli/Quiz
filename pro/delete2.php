<!DOCTYPE html>
<html lang="en">
<head>
  <script src="quizzer.js" type="text/javascript"></script>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../css/normalize.css">
  <link rel="stylesheet" href="../css/skeleton.css">
  <title>Add Record Form</title>
</head>

<body>
  <center>
    <?php

    $tab = $_POST['dbtable'];

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

    $sql = "delete from results where quiz='$tab'";
    $result = $conn->query($sql);

    $sql = "delete from all_tests where name='$tab'";
    $result = $conn->query($sql);

    $sql = "drop table $tab";
    $result = $conn->query($sql);

    echo "Done";

    $conn->close();
    ?>

    <br>
    <input class=btn type=button value='Go Home' onClick=window.location.href='../index.php'>

  </center>
</body>
</html>
