<?php
  class Conexion{
    private $servidor="hstng01.ci4cd.net:3306";
    private $username = "lpichardo";
    private $password = "HmAmw4sDw7Mz7hF5";
    private $database = "lpichardo";
    protected $con="";

    function __construct(){
        $this->con=new mysqli($this->servidor,$this->usuario,$this->password,$this->base);
        if($this->con->connect_errno){
            echo "Fallo al conectarse con la Base de Datos ".$this->con->connect_error;
        }
        $this->con->set_charset("utf8");
    }

  }
?>