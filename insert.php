 <?php
$servername = "localhost";
$username = "root";
$password = "ok260478";
$dbname = "gesteple";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $date = test_input($_POST["date"]);
  $logement = test_input($_POST["logement"]);
  $elec = test_input($_POST["elec"]);
  $eau = test_input($_POST["eau"]);
  $gaz = test_input($_POST["gaz"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO releve_logements (date, logement, elec, eau, gaz)
VALUES ('$date', '$logement', '$elec', '$eau', '$gaz')";

if ($conn->query($sql) === TRUE) {
    $reponse = "New record created successfully";
} else {
    $reponse = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo json_encode(['reponse' => $reponse]);

?>
