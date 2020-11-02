<!DOCTYPE html>
<html lang="es">
<head>
    <link  rel="icon"   href="imagenes/Mlogo.jpg" type="image/png" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatBot Para Muller Lewis</title>
    <link rel="stylesheet" href="css/MullerStyle.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.3/glider.min.css">
    
</head>

<body>
    <div class="wrapper">
        <div class="header">
                        <h4> <img src='imagenes/Mlogo.png' class='imgRedonda'/> <br>CHATBOT Muller Lewis</h4>           
                    </div>
        <div class="form" method="post" autocomplete="no">
            <div class="bot-inbox inbox">
                <div class="icon">
                    <img src='imagenes/chat.png' class='imgRedonda2'>
                </div>
                <div class="msg-header">
                    <p>Hola! Soy soy la asistente inteligente de Muller Lewis y te ayudaré a mejorar tu experiencia con nosotros.<br>Gracias por contactarte.<br>¿Dime, cómo te puedo ayudar hoy?</p>
                    <button type="button" class="btn btn-primary" id=Cotizacion >
                    Cotizaciòn</button>
                    <br><br>
                    <button type="button" class="btn btn-primary" id=Campana >
                    Campaña</button>
                </div>
            </div>
        </div>
        <form>
        <div class="typing-field">
            <div class="input-data">
                <input id="data" type="text" placeholder="Escribe tu pregunta..." required>
                <button id=send-btn> Enviar </button>
            </div>
        </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.3/glider.min.js"></script>
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <script src="js/app.js"></script>
    <script src="js/jquery-3.4.0.min.js"></script>
    <script src="js/bootstrap.js"></script>
    
</body>
</html>