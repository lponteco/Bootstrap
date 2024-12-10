document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const terminos = document.getElementById("terms");

    const errores = {
        nombre: "El nombre no puede estar vacío.",
        email: "El correo debe ser válido (incluye '@' y '.').",
        password: "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un signo.",
        confirmPassword: "Las contraseñas deben coincidir.",
        terminos: "Acepte los términos para continuar.",
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

        const passwordValido = validarCampo(
            password,
            "errorPassword",
            password.value.trim() === "" ||
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
            errores.password
        );

        const confirmPasswordValido = validarCampo(
            confirmPassword,
            "errorConfirmPassword",
            confirmPassword.value.trim() === "" || confirmPassword.value !== password.value,
            errores.confirmPassword
        );

        const terminosValido = validarCampo(
            terminos,
            "errorTerminos",
            !terminos.checked,
            errores.terminos
        );
    };


    form.addEventListener("input", validarFormulario);
    terminos.addEventListener("change", validarFormulario);

    // Controlar el envío del formulario
    form.addEventListener("submit", (e) => {
        // Solo se puede enviar si todo está validado correctamente
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

        const passwordValido = validarCampo(
            password,
            "errorPassword",
            password.value.trim() === "" ||
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
            errores.password
        );

        const confirmPasswordValido = validarCampo(
            confirmPassword,
            "errorConfirmPassword",
            confirmPassword.value.trim() === "" || confirmPassword.value !== password.value,
            errores.confirmPassword
        );

        const terminosValido = validarCampo(
            terminos,
            "errorTerminos",
            !terminos.checked,
            errores.terminos
        );

        const formularioValido = nombreValido && emailValido && passwordValido && confirmPasswordValido && terminosValido;

        // Si el formulario no es válido, evitamos su envío
        if (!formularioValido) {
            e.preventDefault();
        }
    });
});

