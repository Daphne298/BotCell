

<?php
// Conectar a la base de datos
include 'conexion00.php';
            $sql = "SELECT est_ID,est_ESTADO FROM establecimiento where est_STATUS = 'ALTA'";
            $resultado = $conexion00->query($sql);

            if($resultado->num_rows > 0){
                while($row = $resultado->fetch_assoc()){
            			echo $row['est_ID'];echo "<br>";
                        echo $row['est_ESTADO'];
                        echo "<br>";
                        ?>
                        <input type="button" class="btn btn-primary" name="establecimientos" id="<?php echo $row['est_ID']; ?>" 
						value="Mostrar Detalles" onclick="verestablecimientx(this)" />  <br>
                    <?php
                }
            }
            ?>

            <script type="text/javascript">
            	//Si preciona el boton Establecimientodet
                var id ; 
            	function verestablecimientx(comp){
  				let id = comp.id;
				document.getElementById(id)
    			dato = 'establecimiento';
    			respuestaUsuario('Detalles del establecimiento  '+id);
    			VerEstablecimiento();
				}

			function VerEstablecimiento(){
    		$.ajax({
        	url: 'control/DetalleEstablecimiento.php',
        	type: 'POST',
        	data: id,
        	success: function (response) {
            responderChatbot(response);
        
        }
    });
}
            </script>