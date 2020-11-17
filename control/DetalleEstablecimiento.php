<?php
// Conectar a la base de datos
include 'conexion00.php';
            $sql = "SELECT * FROM establecimiento where est_STATUS = 'ALTA'";
            $resultado = $conexion00->query($sql);

            if($resultado->num_rows > 0){
                while($row = $resultado->fetch_assoc()){
                    ?>
                        <?php echo $row['est_ID'];
                        echo "<br>";
                        echo $row['est_ESTADO'];
                        echo "<br>";
                        echo $row['est_DIREC'];
                        echo "<br>";
                        echo $row['est_HORARIO'];
                        echo "<br>";
                        echo "<br>";
                        echo "----------->";
                        echo "<br>";
                        echo "<br>";
                }
            }
   