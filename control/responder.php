<?php

    include "control/conexion00.php";
    
    $getMesg =  $_POST['text'];

    $query = "SELECT Respuesta FROM cpr WHERE Pregunta = '%$getMesg%';";

    $run_query = mysqli_query($conexion00, $query);

    if(mysqli_num_rows($run_query) > 0){
        //Da la respuesta del cliente
        $fetch_data = mysqli_fetch_assoc($run_query);
        //almacena la respuesta en el AJAX
        $replay = $fetch_data['Respuesta'];
        echo $replay;
    }

?>