<?php
    include_once './control/funciones.php';

    $funciones=new Funciones();

    $listadoProductos=$funciones->getTodosProductos();

    $funciones->cerrarConexion();

    //var_dump($listado);
    $jsonstring = json_encode($listadoProductos);
    echo $jsonstring;

    
?>