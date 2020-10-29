// ---------------------------Carusel 
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

function Contactanos () {
	alert ("Comunicate al numero +52 55-18-47-89 ");
	}
function Reservar(){
		window.open("https://www.youtube.com/watch?v=h1aoYXl850Y", "_blank ")
}


$(document).ready(function(){
	$("#send-btn").on("click", function(){
		$value = $("#data").val();
		$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
		$(".form").append($msg);
		$("#data").val('');
		
		// Codigo AJAX
		$.ajax({
			url: 'PHP/conexion.php',
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
});

// ----------------------Funciones de los botones 
document.getElementById("MostrarProductos").onclick = MostrarProductos;


function MostrarProductos(){
	$value = "Mostrar Productos";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'PHP/conexion.php',
				type: 'POST',
				data: 'text='+$value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div>';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
			}); 
}

document.getElementById("EstatusCompra").onclick = EstatusCompra ;
function EstatusCompra(){
	$value = "Estatus Compra";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'PHP/conexion.php',
				type: 'POST',
				data: 'text='+$value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div>';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
			}); 
}

document.getElementById("AtencionClientes").onclick = AtencionClientes;   
function AtencionClientes(){
	$value = "Atencion Clientes";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'PHP/conexion.php',
				type: 'POST',
				data: 'text='+$value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div>';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
			}); 
}

document.getElementById("CancelarCompra").onclick = CancelarCompra;
function CancelarCompra(){
	$value = "Cancelar Compra";
	$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
	$(".form").append($msg);
	$("#data").val('');  
	 
	// Codigo AJAX
			$.ajax({
				url: 'PHP/conexion.php',
				type: 'POST',
				data: 'text='+$value,
				success: function(result){
					$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ result +'</p></div></div>';
					$(".form").append($replay);
					//Esto es para que la barra baje al ultimo chat.
					$(".form").scrollTop($(".form")[0].scrollHeight);
				}
			}); 
}