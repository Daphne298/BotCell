<?php

$hostname = "hstng01.ci4cd.net:3306";

$username = "lpichardo";

$password = "HmAmw4sDw7Mz7hF5";

$database = "lpichardo";

$conexion00 = mysql_connect ( $hostname, $username, $password );

mysql_select_db ( $database, $conexion00 );

?>