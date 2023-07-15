function validarCampo(inputId, errorId, mensajeVacio, mensajeMaximo, validarEmail = false) {
  var input = document.getElementById(inputId);
  var error = document.getElementById(errorId);
  var valor = input.value.trim();
  
  if (valor === "") {
    error.textContent = mensajeVacio;
    return false;
  }
  
  if (valor.length > 50) {
    error.textContent = mensajeMaximo;
    return false;
  }
  
  if (validarEmail && (!valor.includes("@") || !valor.includes("."))) {
    error.textContent = "El campo de 'Email' debe tener un '@' y un '.' al final.";
    return false;
  }
  
  error.textContent = "";
  return true;
}

function validarFormulario() {
  var nombreValido = validarCampo("nombre", "error-nombre", "El campo 'Nombre' no debe estar vacío.", "El campo 'Nombre' debe tener máximo 50 caracteres.");
  var emailValido = validarCampo("email", "error-email", "El campo 'Email' no debe estar vacío.", "El campo de 'Email' debe tener máximo 50 caracteres.", true);
  var asuntoValido = validarCampo("asunto", "error-asunto", "El campo 'Asunto' no debe estar vacío.", "El campo 'Asunto' debe tener máximo 50 caracteres.");
  var mensajeValido = validarCampo("mensaje", "error-mensaje", "El campo 'Mensaje' no debe estar vacío.", "El campo 'Mensaje' debe tener máximo 300 caracteres.");

  return nombreValido && emailValido && asuntoValido && mensajeValido;
}

var formulario = document.querySelector("form[name='form']");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  if (validarFormulario()) {
    console.log("Mensaje enviado");
    formulario.submit();

    var botonEnviar = document.querySelector(".formcontato__botao");
    botonEnviar.style.display = "none";
  } else {
    console.log("Hay campos no válidos en el formulario");
  }
});