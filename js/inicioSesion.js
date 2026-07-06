// Función para verificar los datos al iniciar sesión

function verificar() {
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("paswd").value;
    if(correo == "" || contrasena == "") {
        alert("Ningún campo puede estar vació");
        return false;
    }

}