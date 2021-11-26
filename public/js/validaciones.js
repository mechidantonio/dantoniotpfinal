function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  // Campo nombre
  if (nombre == null || nombre.length == 0) {
    alert(
      "¡Ey! te faltó completar tu nombre y apellido."
    );
    return false;
  }
  //Correo
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("¡Ey! No escribiste un correo.");
    return false;
  }
  //Campo mensaje
  if (mensaje == null || mensaje.length == 0) {
    alert(
      "Recordá dejarnos tu mensaje."
    );
    return false;
  }

  return true;
}

function enConstruccion() {
  alert("Aún no está listo.");
}


function respuestaClick() {
  alert("Ups, todavía no está listo");
}
