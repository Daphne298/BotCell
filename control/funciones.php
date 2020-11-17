<?php
include './control/conexion.php';

class Funciones extends Conexion{


   function __construct(){
    //---------------------Manda a conectar con la base de datos 
    parent::__construct();
   }
   //-----------------------Trae todos los datos de productos
    function getTodosProductos(){  

        $queryProductos = "SELECT * from producto where prod_STATUS = 'ALTA'";
        $productos = $this->con->query($conn, $todos_productos) or die("Error");


        $listadoProductos = array();


        while ($row = mysqli_fetch_array($productos)) {
            $listadoProductos[] = array(
                'id'=>$row['prod_ID'],
                'nombre' => $row['prod_NOM'],
                'precio' => $row['prod_PRECIO'],
                'stock' => $row['prod_STOCK'],
                'imagen' => $row['prod_IMAGEN'],
                'status' => $row['proD_STATUS']
            );
        }

    return $listadoProductos;
    
    }
    //---------------------------Trae Todos los datos de los establecimientos 
    function getTodosEstablecimientos(){  

        $queryEstablecimientos = "SELECT * from establecimientos where prod_STATUS = 'ALTA'";
        $establecimientos = $this->con->query($conn, $todos_productos) or die("Error");


        $listadoEstablecimientos = array();


        while ($row = mysqli_fetch_array($establecimientos)) {
            $listadoEstablecimientos[] = array(
                'id'=>$row['prod_ID'],
                'nombre' => $row['prod_NOM'],
                'precio' => $row['prod_PRECIO'],
                'stock' => $row['prod_STOCK'],
                'imagen' => $row['prod_IMAGEN'],
                'status' => $row['proD_STATUS']
            );
        }

    return $listadoEstablecimientos;
    
    }

    function ingresarCliente($nomC, $tel, $email){
        $nombre = $this->con->real_escape_string($nomC);
        $telefono = $this->con->real_escape_string($tel);
        $correo = $this->con->real_escape_string($email);
        $nueva_consulta=$this->con->prepare("INSERT INTO cliente( clie_NOM, clie_TEL, clie_EMAIL, clie_STATUS) VALUES (?,?,?,?);");
        // s = tipo cadena, i = tipo entero, d = tipo doble , b = La variable correspondiente tiene tipo BLOB y será enviada en paquetes   
        $nueva_consulta->bind_param("ssss",$nombre, $telefono, $correo,"ALTA");
        $nueva_consulta->execute();
        $nueva_consulta->close();
        

    }

    function ingresarDomicilio($call,$nume,$cp,$encalle,$ref){

        $calle=$this->con->real_escape_string($call);
        $numero = $this->con->real_escape_string($nume);
        $codigo = $this->con->real_escape_string($cp);
        $encalles = $this->con->real_escape_string($encalle);
        $referencia = $this->con->real_escape_string($ref);
        $nueva_consulta=$this->con->prepare("INSERT into domicilio(domi_CALLE,domi_NUM,domi_CP,domi_ENCALLE,domi_REF,domi_STATUS) VALUES (?,?,?,?,?,?)");
        $nueva_consulta->bind_param("ssisss",$calle,$numero,$codigo,$encalles,$referencia,"ALTA");
        $nueva_consulta->execute();
        $nueva_consulta->close();

    }

    function getResponder($msg){
        $queryPregunta = "SELECT Respuesta FROM cpr WHERE Pregunta LIKE '%$msg%'";
        $Respuesta = $this->con->query($conn, $todos_productos) or die("Error");

    }

    function eliminarPedido($id){
        $id_pedido = $this->con->real_escape_string($id);
        $nueva_consulta=$this->con->prepare("UPDATE pedido  SET pedi_STATUS  =  BAJA WHERE pedi_ID = ? ");
        $nueva_consulta->bind_param("i",$id_pedido);
        $nueva_consulta->execute();
        $nueva_consulta->close();
    }

    function estatusPedido($id){
        $id_pedido = $this->con->real_escape_string($id);
        $nueva_consulta=$this->con->prepare("SELECT pedi_STATUS_PED from pedido WHERE pedi_ID = ? ");
        $nueva_consulta->bind_param("i",$id_pedido);
        $nueva_consulta->execute();
        $nueva_consulta->close();
    }


    function cerrarConexion(){

      $this->con->close();

    }

}
?>
