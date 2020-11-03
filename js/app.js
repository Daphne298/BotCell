
document.getElementById('send-btn').addEventListener('click', function () {
    $value = $("#data").val();
    $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
    $(".form").append($msg);
    $("#data").val('');
                
    // Codigo AJAX
    $.ajax({
        url: 'control/pregunta.php',
        type: 'POST',
        data: 'text='+$value,
            success: function(result){
            $replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div>';
            $(".form").append($replay);
            //Esto es para que la barra baje al ultimo chat.
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }
    });
    
});

document.getElementById("segundo").style.display = "none";

document.getElementById("Cotizacion").onclick = Cotizacion ;
function Cotizacion(){
	$value = "Cotizacion";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'control/responder.php',
				type: 'POST',
				data: 'text=' + $value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div> ';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
            });
            document.getElementById("inicio").style.display = "none";
            document.getElementById("segundo").style.display = "block";
}

var btnCa = document.getElementById('Campana');
var btnM = document.getElementById('MostrarProductos');  

document.getElementById("Campana").onclick = Campana ;
function Campana(){
	$value = "Campaña";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'control/responder.php',
				type: 'POST',
				data: 'text=' + $value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div> ';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
            });
            document.getElementById("inicio").style.display = "none";
}