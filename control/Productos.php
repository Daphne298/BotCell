<?php
    // Conectar a la base de datos
    include 'conexion00.php';
    $sql = "SELECT * FROM producto where prod_STATUS = 'ALTA'";
    $resultado = $conexion00->query($sql);

    if($resultado->num_rows > 0){
        while($row = $resultado->fetch_assoc()){
             ?>
                <img src="<?php echo $row['prod_IMAGE']; ?>" > 
                        <?php
                            echo "ESTABLECIMIENTO ".$row['prod_NOM'];echo "<br> EN "; 
                            echo $row['prod_PRECIO'];echo "<br>";
                        ?> 
                <input type="button" class="btn btn-primary" name="establecimientos" id="<?php echo $row['prod_ID']; ?>" 
                value="Mostrar Detalles" onclick="verestablecimientx(this)" />  <br>
            <?php
        }
    }else{
        echo "No hay ningun productos disponible";
    }
?>