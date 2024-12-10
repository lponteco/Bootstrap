document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errores = {
        email: "El correo debe ser válido (incluye '@' y '.').",
        password: "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un signo.",
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
        const emailValido = validarCampo(
            email,
            "errorEmail",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
            errores.email
        );

        const passwordValido = validarCampo(
            password,
            "errorPassword",
            password.value.trim() === "" ||
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
            errores.password
        );
    };

    form.addEventListener("input", validarFormulario);

    form.addEventListener("submit", (e) => {
       
        const emailValido = validarCampo(
            email,
            "errorEmail",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
            errores.email
        );

        const passwordValido = validarCampo(
            password,
            "errorPassword",
            password.value.trim() === "" ||
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
            errores.password
        );

        const formularioValido = emailValido && passwordValido;

        if (!formularioValido) {
            e.preventDefault();
        }
    });
});