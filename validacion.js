function validarNombre() {
    var nombreInput = document.getElementById("nombre");
    var errorNombre = document.getElementById("error-nombre");
  
    if (nombreInput.value.trim() === "") {
      errorNombre.textContent = "El campo 'Nombre' no debe estar vacío.";
      return false;
    }
  
    if (nombreInput.value.length > 50) {
      errorNombre.textContent = "El campo 'Nombre' debe tener máximo 50 caracteres.";
      return false;
    }
  
    errorNombre.textContent = "";
    return true;
  }
  
  function validarEmail() {
    var emailInput = document.getElementById("email");
    var errorEmail = document.getElementById("error-email");
  
    if (emailInput.value.trim() === "") {
      errorEmail.textContent = "El campo 'Email' no debe estar vacío.";
      return false;
    }
  
    if (emailInput.value.indexOf("@") === -1 || emailInput.value.indexOf(".") === -1) {
      errorEmail.textContent = "El campo de 'Email' debe tener un '@' y un '.' al final.";
      return false;
    }
  
    errorEmail.textContent = "";
    return true;
  }
  
  function validarAsunto() {
    var asuntoInput = document.getElementById("asunto");
    var errorAsunto = document.getElementById("error-asunto");
  
    if (asuntoInput.value.trim() === "") {
      errorAsunto.textContent = "El campo 'Asunto' no debe estar vacío.";
      return false;
    }
  
    if (asuntoInput.value.length > 50) {
      errorAsunto.textContent = "El campo 'Asunto' debe tener máximo 50 caracteres.";
      return false;
    }
  
    errorAsunto.textContent = "";
    return true;
  }
  
  function validarMensaje() {
    var mensajeInput = document.getElementById("mensaje");
    var errorMensaje = document.getElementById("error-mensaje");
  
    if (mensajeInput.value.trim() === "") {
      errorMensaje.textContent = "El campo 'Mensaje' no debe estar vacío.";
      return false;
    }
  
    if (mensajeInput.value.length > 300) {
      errorMensaje.textContent = "El campo 'Mensaje' debe tener máximo 300 caracteres.";
      return false;
    }
  
    errorMensaje.textContent = "";
    return true;
  }
  
  var formulario = document.querySelector("form[name='form']");
  
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
  
    if (validarNombre() && validarEmail() && validarAsunto() && validarMensaje()) {
      console.log("Mensaje enviado");
      formulario.submit(); // Envío del formulario
    } else {
      console.log("Hay campos no válidos en el formulario");
    }
  });
  