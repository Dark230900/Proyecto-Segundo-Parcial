$(function() {
  $("#birthdate").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '1920:' + new Date().getFullYear(), // Establecer el rango de años
    dateFormat: "yy-mm-dd"
  });
  
  // Mostrar el calendario al hacer clic en el botón
  $("#mostrarCalendario").click(function() {
    $("#calendarioContainer").show();
  });
  
  // Manejar clic en el botón de "Iniciar sesión"
  $("#iniciarSesionBtn").click(function() {
    validarUsuario();
  });
  
  // Esconder el calendario al hacer clic fuera de él
  $(document).mouseup(function(e) {
    var container = $("#calendarioContainer");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
  });
});

// Función para validar el usuario y manejar la redirección
function validarUsuario() {
    var username = $("#username").val();
    var password = $("#password").val();
    var birthdate = $("#birthdate").val();

    // Verificar credenciales
    if (usuarios[username] && usuarios[username] === password) {
        // Redirigir a la página de inicio
        window.location.href = "html/inicio.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Definir usuarios y contraseñas en un objeto JavaScript
var usuarios = {
    "admin": "admin",
    "Carlos": "Carlos",
    "Danny": "Danny"
    // Agrega más usuarios según sea necesario
};

