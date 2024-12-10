document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mostrarError = (mensaje) => {
        errorEmail.textContent = mensaje;
        errorEmail.style.color = "red";
    };

    const limpiarErrores = () => {
        errorEmail.textContent = "";
    };

    const validarEmail = (email) => {
        return emailRegex.test(email);
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const email = emailInput.value.trim();

        limpiarErrores();

        if (email === "") {
            mostrarError("El correo electrónico no puede estar vacío.");
        } else if (!email.includes("@") || !email.includes(".")) {
            mostrarError("El correo debe ser válido (incluye '@' y '.').");
        } else if (!validarEmail(email)) {
            mostrarError("Por favor, ingresa un correo electrónico válido.");
        } else {
            console.log("Formulario válido. Enviando...");
            form.submit(); 
        }
    });

    emailInput.addEventListener("input", () => {
        limpiarErrores();
    });
});

