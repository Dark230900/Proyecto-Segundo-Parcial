function mostrarFactura() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var metodoPago = document.querySelector('input[name="metodo_pago"]:checked').value;
    var productos = Array.from(document.getElementById('productos').selectedOptions).map(option => option.text);

    document.getElementById('factura').innerHTML = `
    <br>
        <h1>Factura de Compra</h1>
        <p><strong>Nombres:</strong> ${nombres}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Número de Teléfono:</strong> ${telefono}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Método de Pago:</strong> ${metodoPago}</p>
        <p><strong>Productos:</strong> ${productos.join(", ")}</p>
    `;
}
