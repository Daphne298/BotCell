<?php
    include_once './control/funciones.php';

    $funciones=new Funciones();

    $listadoEstablecimientos=$funciones->getTodosEstablecimientos();

    $funciones->cerrarConexion();

    //var_dump($listado);
    $jsonstring = json_encode($listadoEstablecimientos);
    echo $jsonstring;

    
?>