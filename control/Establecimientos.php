

<?php
// Conectar a la base de datos
include 'conexion00.php';
            $sql = "SELECT est_ID,  est_ESTADO FROM establecimiento where est_STATUS = 'ALTA'";
            $resultado = $conexion00->query($sql);

            if($resultado->num_rows > 0){
                while($row = $resultado->fetch_assoc()){
                        $ruta=" https://cdn-0.emojis.wiki/emoji-pics/lg/office-building-lg.png"; ?>
                        <img src="<?php echo $ruta; ?>" width="50" height="50"> 
                                <?php
                                    echo "ESTABLECIMIENTO ".$row['est_ID'];echo "<br> EN "; 
                                    echo $row['est_ESTADO'];echo "<br>";
                                ?> 
                        <input type="button" class="btn btn-primary" name="establecimientos" id="<?php echo $row['est_ID']; ?>" 
						value="Mostrar Detalles" onclick="verestablecimientx(this)" />  <br>
                    <?php
                }
            }else{
                echo "No hay ningun local disponible";
            }
            ?>

            <script type="text/javascript">
            	//Si preciona el boton Establecimientodet
                var id ;

            	function verestablecimientx(comp){
  				let id = comp.id;
				document.getElementById(id)
    			dato = 'establecimiento';
                respuestaUsuario('Detalles del establecimiento  '+ id);
    			VerEstablecimiento(id);
				}

			function VerEstablecimiento(ide){
                var parametros = {"ide":ide};
                $.ajax({
                    url: 'control/DetalleEstablecimiento.php',
                    type: 'POST',
                    data: parametros,
                    success: function (response) {
                    responderChatbot(response);
                
                    }
                });
            }
            </script>