console.log("Conectado")

function esNombrePersonaValido(nombre) {
    return /^[A-Za-z\s]+$/.test(nombre);
}

let nombreMatero;
let usuarioMatero;
let yerbaElegida;


do {
    nombreMatero = prompt("Como es su nombre querido/a matero/a");

    if (!nombreMatero) {
        alert("Por favor digame su nombre 🙌 ");
    } else if (!esNombrePersonaValido(nombreMatero)) {
        alert("Ingrese un nombre correcto sin caracteres especiales.");
    }

} while (!nombreMatero || !esNombrePersonaValido(nombreMatero));

alert("Hola " + nombreMatero + ", bienvenido.");

usuarioMatero = prompt(nombreMatero + ", este es el rincon matero por excelencia, es el momento de que te pongas un apodo. ");

while (!usuarioMatero) {
    alert("Es el momento de que te pongas un apodo, asi te conocemos en nuestra gran comunidad.");
    usuarioMatero = prompt(nombreMatero + ", ahora crea tu apodo:");
}

while (usuarioMatero === nombreMatero) {
    alert("Tu apodo no puede ser igual al nombre ingresado. Por favor, elige otro nombre de usuario.");
    usuarioMatero = prompt("Elegi otro apodo:");

}
let personaje1;

do {
    personaje1 = prompt("Como preferis el mate: amargo o dulce").toLowerCase();

    if (personaje1 === "amargo") {
        yerbaElegida = prompt("Que yerba te gusta usar: canarias, playadito o rosamonte").toLowerCase();
        while (yerbaElegida !== "canarias" && yerbaElegida !== "playadito" && yerbaElegida !== "rosamonte") {
            yerbaElegida = prompt("Por favor, elige una yerba mencionada: canarias, playadito o rosamonte").toLowerCase();
        }
    } else if (personaje1 === "dulce") {
        yerbaElegida = prompt("Elige la yerba que preferis: verde flor, kurupi").toLowerCase();
        while (yerbaElegida !== "verde flor" && yerbaElegida !== "kurupi" ) {
            yerbaElegida = prompt("Por favor, elige una yerba mencionada").toLowerCase();
        }
    } else {
        alert("Como tomas el mate(amargo o dulce)");
    }
} while (personaje1 !== "amargo" && personaje1 !== "dulce");


function mostrarInformacionPersonaje(nombre, usuarioMatero,yerbaElegida) {
    let mensaje = "Hola " + nombre + " estos son los productos que tenemos en stock actualmente   \n\n" ;
    mensaje += "\n";
    
    if (yerbaElegida === "canarias") {
        mensaje += "Tenemos estas variedades de la yerba canarias:\n";
        mensaje += "Tradicional \n";
        mensaje += "Serena \n";
        mensaje += "Edicion Especial \n";
        mensaje += "Te Rojo y Centella \n";
        mensaje += "Te Verde y Jengibre\n";
    } else if (yerbaElegida === "playadito") {
        mensaje += "Tenemos estas variedades de la yerba playadito:\n";
        mensaje += "Tradicional, elaborada con palo \n";
        mensaje += "Despalada \n";
        mensaje += "Terere \n";
        mensaje += "Elaborada con hierbas\n";
    } else if (yerbaElegida === "rosamonte") {
        mensaje += "Tenemos estas variedades de la yerba rosamonte:\n";
        mensaje += "Premium \n";
        mensaje += "Despalada \n";
        mensaje += "Terere \n";
        mensaje += "Suave-Plus \n";
    } else if (yerbaElegida === "verde flor") {
        mensaje += "Tenemos estas variedades de la yerba VerdeFlor: \n";
        mensaje += " Con Menta \n";
        mensaje += " Con Boldo\n";
        mensaje += " Con Peperina\n";
    } else if (yerbaElegida === "kurupi") {
        mensaje += "Tenemos estas variedades de la yerba Kurupi: \n";
        mensaje += " Boldo y menta\n";
        mensaje += " Cedron Kapi y Menta\n";
        mensaje += " Yorador con Vitamina C\n";
    } else {
        mensaje += "Esa yerba no tenemos actualmente";
    }

    alert(mensaje);
}

mostrarInformacionPersonaje(nombreMatero, usuarioMatero, yerbaElegida);

