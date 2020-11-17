//Para la que el segundo div desaparezca 
document.getElementById("segundo").style.display = "none";
// informacion
var dato;

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
        pregunta: "¿Cuál es la calle de tu domicilio?",
        reGex: /[0-9A-Za-z]/,
        validacion: 'Escribe domicilio valido'
    },
    {
        pregunta: "¿Cuál es el numero de tu vivienda?",
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
	dato = 'cotizar';
    respuestaUsuario(dato);
	document.getElementById("inicio").style.display = "none";
    document.getElementById("segundo").style.display = "block";
    control();
    dato
});

//Si preciona el boton Campaña
document.getElementById('Campana').addEventListener('click', function () {
	dato = 'campana';
	respuestaUsuario('Campaña');
    document.getElementById("inicio").style.display = "none";
    control();
});

//Si preciona el boton comprar
document.getElementById('Comprar').addEventListener('click', function () {
	dato = 'comprar';
	respuestaUsuario(dato);
    document.getElementById("segundo").style.display = "none";
    control();
});

//Si preciona el boton estatus compra
document.getElementById('EstatusCompra').addEventListener('click', function () {
	dato = 'estatus';
	respuestaUsuario('Estatus Compra');
    document.getElementById("segundo").style.display = "none";
    control();
});

//Si preciona el boton Atencion Clientes
document.getElementById('AtencionClientes').addEventListener('click', function () {
	dato = 'atencion';
	respuestaUsuario('Atencion a clientes');
    document.getElementById("segundo").style.display = "none";
    control();
    controlEstablecimiento();
});

//Si preciona el boton Cancelar Compra
document.getElementById('CancelarCompra').addEventListener('click', function () {
	dato = 'cancelar';
	respuestaUsuario('Cancelar compra');
    document.getElementById("segundo").style.display = "none";
    control();
});
//Si el usuario escribe algo 
document.getElementById('send-btn').addEventListener('click', function () {
    respuestaUsuario();     
    control();           
});


// control de todo el funcionamiento
function control(){
    $.ajax({
        url: 'control/pregunta.php',
        type: 'POST',
        data: 'text='+ dato,
        success: function (response) {
            responderChatbot(response);
        
        }
    });
}

function controlEstablecimiento(){
    $.ajax({
        url: 'control/Establecimientos.php',
        type: 'POST',
        data: dato,
        success: function (response) {
            responderChatbot(response);
        
        }
    });
}



//Ingresar datos de usuario
function ingresarDU(respuestasUsu){
    var postData = {
        nombre: respuestasUsu[0],
        correo: respuestasUsu[1],
        telefono: respuestasUsu[2]
    };
    var datosUsu =`
    <strong>Sus datos son correctos?</strong><br>
    <strong>Nombre:</strong> ${postData.nombre}<br>
    <strong>Correo:</strong> ${postData.correo}<br>
    <strong>Telefono:</strong> ${postData.telefono}<br>
    `;
    responderChatbot(datosUsu);
}

//Ingresar datos del domicilio 
function ingresarDomi(respuestasDomicilio){
    var postData = {
        calle: respuestasDomicilio[0],
        numero: respuestasDomicilio[1],
        cp: respuestasDomicilio[2],
        encalles: respuestasDomicilio[3],
        ref: respuestasDomicilio[4]
    };
    var datosDomi =`
    <strong>Sus datos son correctos?</strong><br>
    <strong>Calle:</strong> ${postData.calle}<br>
    <strong>Numero:</strong> ${postData.numero}<br>
    <strong>Codigo postal:</strong> ${postData.cp}<br>
    <strong>Entre las calles:</strong> ${postData.encalles}<br>
    <strong>Referencia:</strong> ${postData.ref}<br>
    `;
    responderChatbot(datosDomi);
    
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
        dato = $value;
        $value.toLowerCase();
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

