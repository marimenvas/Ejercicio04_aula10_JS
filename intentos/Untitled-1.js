<!DOCTIPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio_10_03_JS_version_Final</title> 
    <link rel="stylesheet" href="css/bootstrap.min.css"/>  
</head>
<body>  
    
    <div class="container border border primary" align:center>
        <div class="row border border primary"align:center>
            <div class="col"align:center>
                <h1>Oi Mundo</h1>
                    <h2>Hola Mundo</h2>
                        <p>Este é um espacio para te entreter.</p>
                       
                        <div class="containerDados" align:center>
                            <h5>¿Quieres Registrarte?</h5>                            
                            <form action="" class="formulario" id="formulario" name="formulario">
                                <div id= "dados" class="dados">
                                    <div id="usuario" class = "usuario">
                                        <input type="text" name="nome" value="" placeholder="Nome">
                                        <input type="text" name="sobrenome" value="" placeholder="Sobrenome"> 

                                        <input type="number" name="edade" value="" placeholder="Edade">
                                    </div>  
                                <button type="button" onclick="buttonEnviar()">ENVIAR</button>
                                </div> 
                            </form>
                            <ul id="usuarioList"></ul>  
                          </div>                        
      
    <script src="javaScript.js"> </script> 
            </div>
        </div>
    </div>
</body>