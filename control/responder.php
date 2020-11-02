<?php

$x = $_POST [ 'text' ];

    include "control/conexion00.php";

    $q = "SELECT * FROM cpr WHERE pregunta = '$x'; ";

    $r = mysql_query ( $q, $conexion00 );

    $row = mysql_fetch_array ( $r );

    $json = array();

    $json['Respuesta'][]=$row[Respuesta];

    echo json_encode($json);

    include "control/desconexion00.php";

?>