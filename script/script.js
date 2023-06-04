
function juego() {
    let numeroAdivinar
    do {
        numeroAdivinar = parseInt(prompt("Jugador uno ingresa un numero sin que el Jugador dos lo vea" + "\n" + "el numero debe ser entero del 1 al 10"))
    } while (isNaN(numeroAdivinar) || numeroAdivinar < 1 || numeroAdivinar > 10);

    alert("¡Jugador dos, comienza a adivinar el numero del 1 al 10!")

    let intentos = 3

    for (let i = 3; i > 0; i--) {
        let numeroAdivinado = parseInt(prompt("Adivina el numero!"))
        if (numeroAdivinado === numeroAdivinar) {
            alert("Felicidades Jugador dos, has ganado el juego")
            juegoBienvenida()
            return
        } else {
            intentos--

            if (intentos === 0) {
                alert("Lo siento Jugador dos, has perdido el juego." + "\n" + " El numero correcto era " + numeroAdivinar)
            } else {
                alert("Lo lamento, el numero no es correcto, vuelve a intentar" + "\n" + intentos + " intentos restantes")
            }
        }
    }

    juegoBienvenida()
}

juegoBienvenida()

function juegoBienvenida() {
    let bienvenida
    do {
        let mensaje = "Bienvenidos al juego de ADIVINA EL NUMERO" + "\n" + "Presiona: 1 para jugar, 0 para salir"
        bienvenida = prompt(mensaje)

    } while (bienvenida != "1" && bienvenida != "0")

    if (bienvenida === "1") {
        juego()
    } else {
        alert("Adios!, vuelve a jugar cuando quieras!")
    }
}

