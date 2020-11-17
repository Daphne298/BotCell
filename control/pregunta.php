<?php
// Conectar a la base de datos
include 'conexion00.php';
// Recibir el mensaje del cliente.
$getMesg = mysqli_real_escape_string($conexion00, $_POST['text']);

// Revisar si la consulta existe en nuestra base
$check_data = "SELECT Respuesta FROM cpr WHERE Pregunta LIKE '%$getMesg%'";
$run_query = mysqli_query($conexion00, $check_data) or die("Error");

// Si la consulta existe dara el resultado
if(mysqli_num_rows($run_query) > 0){
    //Da la respuesta del cliente
    $fetch_data = mysqli_fetch_assoc($run_query);
    //almacena la respuesta en el AJAX
    $replay = $fetch_data['Respuesta'];
    echo $replay;
}
?>