<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/style1.css">
</head>
<body>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <h1>INKA WASI</h1>
    <h2>BIENVENIDO</h2>
    <h4>INICIA SESION</h4>
    <label for="username">Usuario:</label>
    <input type="text" name="username" required>

    <label for="password">Contraseña:</label>
    <input type="password" name="password" required>
    
    <label for="birthdate">Fecha de Nacimiento:</label>
    <input type="date" name="birthdate" required>
    
    <?php
    // Definir usuarios y contraseñas en un array asociativo
    $usuarios = array(
        "admin" => "admin",
        "Carlos" => "Carlos",
        "Danny" => "Danny"
        // Agrega más usuarios según sea necesario
    );

    // Verificar si se ha enviado el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener valores del formulario
        $usuarioIngresado = $_POST["username"];
        $contrasenaIngresada = $_POST["password"];

        // Verificar si el usuario existe y la contraseña es correcta y si tiene al menos 18 años
        if (array_key_exists($usuarioIngresado, $usuarios) && $usuarios[$usuarioIngresado] == $contrasenaIngresada) {
            $fechaNacimiento = new DateTime($_POST["birthdate"]);
            $hoy = new DateTime();
            $edad = $hoy->diff($fechaNacimiento)->y;

            if ($edad >= 18) {
                // Redirigir a dashboard.php
                header("Location: html/inicio.html");
                exit();
            } else {
                echo '<p style="color: red;">Error: Debes ser mayor de 18 años para acceder.</p>';
            }
        } else {
            // Mostrar mensaje de error
            echo '<p style="color: red;">Error: Usuario o contraseña incorrectos.</p>';
        }
    }
    ?>

    <input type="submit" value="Iniciar sesión">
</form>
</body>
</html>
