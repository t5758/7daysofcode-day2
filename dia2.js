
document.addEventListener("DOMContentLoaded", function () {

    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tienes?");
    let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

    if (nombre) document.getElementById("name").value = nombre;
    if (edad) document.getElementById("age").value = edad;
    if (lenguaje) document.getElementById("language").value = lenguaje;

    alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

    let gustaEstudiar = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

    let messageElement = document.getElementById("message");
    let inputLanguageTwo = document.getElementById("language_two");

    if (gustaEstudiar === "1") {
        inputLanguageTwo.value = "Sí";
        messageElement.textContent = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else if (gustaEstudiar === "2") {
        inputLanguageTwo.value = "No";
        messageElement.textContent = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    } else {
        inputLanguageTwo.value = "Respuesta no válida";
        messageElement.textContent = "Por favor, ingresa 1 para Sí o 2 para No.";
    }

    document.getElementById("btn").addEventListener("click", function () {
        location.reload();
    });
});

