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
    <form action="../take3.php" method="post">
      <table border=1>
        <tr><td>Name<td>Roll No.<td>Stream<td>College<td>Score</tr>

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

          $sql = "SELECT * FROM results where quiz='$tab' order by score desc";
          $result = $conn->query($sql);

          if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              echo "<tr><td>" . $row["name"]. "</td><td>" . $row["rno"]. "</td><td>" . $row["stream"]. "</td><td>". $row["college"]. "</td><td>". $row["score"]. "</td></tr>";
            }
            echo "</table>";
          }
          else {
            echo "0 results";
          }
          echo "<input type=hidden name=table value='$tab'>";
          $conn->close();
          ?>

          <br>
        </table>
        <input class=btn type=button value='Go Home' onClick=window.location.href='../index.php'>
      </form>
    </center>
  </body>
  </html>
