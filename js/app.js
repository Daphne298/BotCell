//Para la que el segundo div desaparezca 
document.getElementById("segundo").style.display = "none";
// variable de los botones 
var boton 

// guarda los datos del usuario 
var respuestasUsu = [];
//guarda los datos del domicilio del usuario 
var respuestasDomicilio = [];
// preguntas para el usuario 
const preguntasUsu = [

    {
        pregunta: "¿Cuál es tu nombre?",
        reGex: /[0-9A-Za-z]/,
        validacion: 'Escribe un nombre valido'
    },
    {
        pregunta: "Cuál es tu correo electrónico?",
        reGex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        validacion: 'Escribe un correo electrónico correcto'
    },
    {
        pregunta: "¿Cuál es tu telefono?",
        reGex: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){8})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
        validacion: 'Escribe un telefono correcto'
    }
];
// preguntas para el domicilio 
const preguntasDomicilio = [

    {
        pregunta: "¿Cuál es la calle y num  de tu domicilio?",
        reGex: /[0-9A-Za-z]/,
        validacion: 'Escribe domicilio valido'
    },
    {
        pregunta: "Cuál es tu codigo postal?",
		reGex: /[0-9]]/,
        validacion: 'Escribe un codigo postal correcto'
    },
    {
        pregunta: "¿Entre que calles se encuentra tu domicilio?",
        reGex: /[0-9A-Za-z]/,
        validacion: 'Escribe las calles validas'
	},
	{
        pregunta: "Referencia",
        reGex: /[0-9A-Za-z]/,
        validacion: 'Escribe una referencia valida'
    }
	
];
//Si preciona el boton Cotizar
document.getElementById('Cotizar').addEventListener('click', function () {
	boton = 'Cotizar';
	respuestaUsuario(boton);
	document.getElementById("primero").style.display = "none";
	document.getElementById("segundo").style.display = "visible";
});


document.getElementById('send-btn').addEventListener('click', function () {
	respuestaUsuario();                
    // Codigo AJAX
    $.ajax({
        url: 'control/pregunta.php',
        type: 'POST',
        data: 'text='+$value,
            success: function(result){
            responderChatbot(result);
        }
    });
    
});


//Ingresar datos de usuario
function ingresarDU(){

}

//Ingresar datos del domicilio 
function ingresarDomi(){

}
 
//Mostrara los establecimientos 
function mostrarEstablecimientos (){

}

//Cancelara la compra 
function cancelarCompra(id_compra){

}

//Mostrara el estatus de la compra 
function estatusCompra(id_compra){

}

// Mostrara todos los productos al usuario 
function mostarProductos(){

}

// Escribe la respuesta asistente virtual 
function responderChatbot(res){
	$replay = '<div class="bot-inbox inbox"><div class="icon"><img src="imagenes/chat.png" class="imgRedonda2"></div><div class="msg-header"><p>'+ res +'</p></div></div> ';
	$(".form").append($replay);
	//Esto es para que la barra baje al ultimo chat.
	$(".form").scrollTop($(".form")[0].scrollHeight);
}

// Escribe la respuesta del usuario 
function respuestaUsuario(res) {
	$value = $("#data").val();
	if($value === ''){
		$replay = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ res +'</p></div></div>';
    	$(".form").append($replay);
	}else{
		$msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
    	$(".form").append($msg);
		$("#data").val('');
	}
	//Esto es para que la barra baje al ultimo chat.
	$(".form").scrollTop($(".form")[0].scrollHeight);
}

// Elimina acentos 
const removeAccents =(str)=>{
    return str.normalize("NFD").replace(/[\u0301-\u036f]/gi,"");
  };
