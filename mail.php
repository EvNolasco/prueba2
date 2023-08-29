<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "evnolascofacetti@gmail.com";
    $asuntoCorreo = "Nuevo mensaje de contacto desde tu sitio web";
    $cuerpoCorreo = "Nombre: $nombre\nEmail: $email\nAsunto: $asunto\nMensaje: $mensaje";

    mail($destinatario, $asuntoCorreo, $cuerpoCorreo);
}

if ($correo_enviado_exitosamente) {
    session_start();
    $_SESSION['correo_enviado'] = true;
}
?>

<?php
        session_start();
        if (isset($_SESSION['correo_enviado']) && $_SESSION['correo_enviado'] === true) {
            echo "document.addEventListener('DOMContentLoaded', function() {";
            echo "    document.getElementById('successMessage').innerText = '¡El correo se envió correctamente!';";
            echo "});";
            unset($_SESSION['correo_enviado']);
        }
        ?>