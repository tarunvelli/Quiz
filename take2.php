<!DOCTYPE html>
<html lang="en">
<head>
  <script src="scripts/quizzer.js" type="text/javascript"></script>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <title>Add Record Form</title>
</head>
<body>
  <center>
    <form action="take3.php" method="post">
      <div style="display:block;" id="f1">
        <table>
          <tr><td><label for="name">Name:</label><td><input type="text" name="name" id="name"></td></tr>
          <tr><td><label for="rollNo">Roll No:</label><td><input type="text" name="rollNo" id="rollNo"></td></tr>
          <tr><td><label for="stream">Stream:</label><td><input type="text" name="stream" id="stream"></td></tr>
          <tr><td><label for="college">College:</label><td><input type="text" name="college" id="college"></td></tr>
        </table>
        <input type=button class=btn value=Next id="btn1" onClick=op()>
      </div>
      <div style="display:none;" id="f2">
        <table>
          <?php

          $tab = $_POST['dbtable'];

          require 'config/config.php';

          // Create connection
          $conn = new mysqli($servername, $username, $password, $dbname);
          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }

          $sql = "SELECT s,q,a1,a2,a3,a4 FROM $tab";
          $result = $conn->query($sql);

          if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              echo "<tr><td colspan=2>Q)". $row["q"]."</tr>";
              echo "<tr><td> <input type=radio name=q".$row["s"]." value=1> A) ". $row["a1"]."<td> <input type=radio name=q".$row["s"]." value=2> B) ". $row["a2"]."</tr>";
              echo "<tr><td> <input type=radio name=q".$row["s"]." value=3> C) ". $row["a3"]."<td> <input type=radio name=q".$row["s"]." value=4> D) ". $row["a4"]."</tr>";
            }
            echo "</table>";
          }
          else {
            echo "0 results";
          }
          echo "<input type=hidden name=table value='$tab'>";
          $conn->close();
          ?>
        </table>
        <input type="submit" class=btn value="Submit" >
      </div>
    </form>
  </center>
</body>
</html>
