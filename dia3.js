
let usuario = prompt("Hola, ¿cuál es tu nombre?");
let area = prompt(`\nHola ${usuario}, nos gustaría saber qué área de la Programación te gustaría seguir? (Elige con el número 1 o 2 respectivamente):\n\n1. Front-End\n2. Back-End\n`);

let tecnologia;
let texto = "\nTe gustaría seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?\n\n1. Especialización\n2. Fullstack\n";
let frontReact = "React";
let frontVue = "Vue";
let backC = "C#";
let backJava = "Java";
let decision;


if (area == 1) {  
    tecnologia = prompt(`\nElige qué quieres aprender:\n\n1. ${frontReact}\n2. ${frontVue}\n`);
    if (tecnologia == 1) {
        alert(`\nElegiste aprender ${frontReact}.`);
    } else if (tecnologia == 2) {
        alert(`\nElegiste aprender ${frontVue}.`);
    } else {
        alert(`\nHaz elegido una opción inválida. Inténtalo nuevamente.`);
        throw new Error("Opción inválida.");
    }
} else if (area == 2) {  
    tecnologia = prompt(`\nElige qué quieres aprender:\n\n1. ${backC}\n2. ${backJava}\n`);
    if (tecnologia == 1) {
        alert(`\nElegiste aprender ${backC}.`);
    } else if (tecnologia == 2) {
        alert(`\nElegiste aprender ${backJava}.`);
    } else {
        alert("\nHaz elegido una opción inválida. Inténtalo nuevamente.");
        throw new Error("Opción inválida.");
    }
} else {
    alert("\nHaz elegido una opción inválida para el área. Inténtalo nuevamente.");
    throw new Error("Opción inválida.");
}

decision = prompt(texto);

if (decision == 1 || decision == 2) {
    let otrasTecnologias = "";  
    let agregarMas = true;  

    let tecnologiaNueva = prompt("\nGenial! En qué otra tecnología te gustaría especializarte o conocer?\n\n");
    if (tecnologiaNueva.toLowerCase() !== "no") {
        otrasTecnologias += tecnologiaNueva + ", "; 
    }

    while (agregarMas) {
        
        let respuesta = prompt("\n¿Deseas agregar otra tecnología? Agrégala o escribe < no > para terminar.");
        if (respuesta.toLowerCase() === "no") {
            agregarMas = false;  
        } else {
            otrasTecnologias += respuesta + ", "; 
        }
    }

    if (decision == 1) {
        alert(`Has elegido Especializarte. Otras tecnologías que te interesan: ${otrasTecnologias}`);
    } else if (decision == 2) {
        alert(`Has elegido convertirte en Fullstack. Otras tecnologías que te interesan: ${otrasTecnologias}`);
    }
} else {
    alert("\nOpción inválida. Por favor, elige una opción válida.");
}
