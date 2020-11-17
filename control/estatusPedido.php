<?php
   require_once './control/funciones.php';

  $pregunta =$_POST['pregunta'];
 
  $func=new Funciones();
 
  $res=$func->eliminarPedido($pregunta);

  $func->cerrarConexion();
  
  echo "liminado correctamente";

?>