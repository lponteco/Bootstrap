document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const btnEnviar = document.querySelector(".btn-primary");

    const errores = {
        nombre: "El nombre no puede estar vacío.",
        email: "El correo debe ser válido (incluye '@' y '.').",
        mensaje: "El mensaje no puede estar vacío.",
    };

    const validarCampo = (campo, errorId, condicion, mensaje) => {
        const error = document.getElementById(errorId);
        if (condicion) {
            error.innerText = mensaje;
            return false;
        } else {
            error.innerText = "";
            return true;
        }
    };

    const validarFormulario = () => {
        const nombreValido = validarCampo(
            nombre,
            "errorName",
            nombre.value.trim() === "",
            errores.nombre
        );

        const emailValido = validarCampo(
            email,
            "errorEmail",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
            errores.email
        );

        const mensajeValido = validarCampo(
            mensaje,
            "errorMessage",
            mensaje.value.trim() === "",
            errores.mensaje
        );

        return nombreValido && emailValido && mensajeValido;
    };

    form.addEventListener("input", () => {
        validarFormulario();
    });

    form.addEventListener("submit", (e) => {
        const formularioValido = validarFormulario();

    
        if (!formularioValido) {
            e.preventDefault();
        }
    });
});
