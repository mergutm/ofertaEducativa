<?php
header('Content-Type: application/json');

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Verificar si los campos 'email' y 'message' están presentes en los parámetros POST
    if (isset($_POST['correo']) && isset($_POST['mensaje'])) {

        $to = $_POST['correo'];
        $message = $_POST['mensaje'];
        $subject = $_POST['titulo'];
        $headers = 'From: ofertaeducativa@mixteco.utm.mx' . "\r\n" .
                   'Reply-To: ofertaeducativa@mixteco.utm.mx' . "\r\n" .
                   "Content-Type: text/plain; charset=UTF-8"."\r\n".
                   "Content-Transfer-Encoding: 8bit"."\r\n".
                   'X-Mailer: PHP/' . phpversion();

        // Intentar enviar el correo
        if (mail($to, $subject, $message, $headers)) {
            // Respuesta en caso de éxito
            echo json_encode([
                'status' => 'success',
                'message' => 'Correo enviado exitosamente.',
                'info' => $_POST['correo'] . " ".  $_POST['titulo']
            ]);
        } else {
            // Respuesta en caso de fallo
            echo json_encode([
                'status' => 'error',
                'message' => 'No se pudo enviar el correo.',
                'info' => $_POST['correo'] . " ".  $_POST['titulo']
            ]);
        }
    } else {
        // Respuesta en caso de que falten parámetros
        echo json_encode([
            'status' => 'error',
            'message' => 'Faltan parámetros: email y message son requeridos.'
        ]);
    }
} else {
    // Respuesta en caso de que no sea una solicitud POST
    echo json_encode([
        'status' => 'error',
        'message' => 'Método no permitido. Usa POST.'
    ]);
}
?>
