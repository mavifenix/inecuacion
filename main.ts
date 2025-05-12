// Esta función compara los números y muestra el resultado
function compararYMostrar () {
    // Muestra el primer número
    basic.showNumber(numero1)
    basic.pause(1000)
    // Muestra el texto " vs "
    basic.showString(" vs ")
    basic.pause(1000)
    // Muestra el segundo número
    basic.showNumber(numero2)
    basic.pause(1000)
    // Lógica de comparación
    if (numero1 > numero2) {
        // Muestra ">" si numero1 es mayor
        basic.showString(">")
    } else if (numero1 < numero2) {
        // Muestra "<" si numero1 es menor
        basic.showString("<")
    } else {
        // Muestra "=" si son iguales
        basic.showString("=")
    }
    // Pausa para que el resultado sea visible
    basic.pause(3000)
    // Opcional: Reiniciar para ingresar nuevos números
    basic.clearScreen()
    estadoEntrada = 1
    numero1 = 0
    numero2 = 0
    basic.showString("ENTER 1")
}
// Manejador del botón A
input.onButtonPressed(Button.A, function () {
    // Si estamos ingresando el primer número
    if (estadoEntrada == 1) {
        // Incrementa el primer número
        numero1 += 1
        // Muestra el número actual
        basic.showNumber(numero1)
    } else if (estadoEntrada == 2) {
        // Si estamos ingresando el segundo número
        // Incrementa el segundo número
        numero2 += 1
        // Muestra el número actual
        basic.showNumber(numero2)
    }
})
// Manejador del botón B
// Si estamos en estado 3 (mostrando resultado), el botón B actualmente no hace nada
// podrías añadir lógica aquí para reiniciar el proceso si quisieras.
input.onButtonPressed(Button.B, function () {
    // Si estamos confirmando el primer número
    if (estadoEntrada == 1) {
        // Cambia al estado de ingresar el segundo número
        estadoEntrada = 2
        // Indica que se ingrese el segundo número
        basic.showString("ENTER 2")
        // Pausa para el mensaje
        basic.pause(1000)
        // Limpia la pantalla
        basic.clearScreen()
    } else if (estadoEntrada == 2) {
        // Si estamos confirmando el segundo número
        // Cambia al estado de comparación (aunque no usamos estado 3, solo llamamos a la función)
        estadoEntrada = 3
        // Llama a la función para comparar y mostrar
        compararYMostrar()
    }
})
let numero2 = 0
let numero1 = 0
let estadoEntrada = 0
// Bloque "on start" - Se ejecuta una sola vez al encender
// Pide al usuario que ingrese el primer número
basic.showString("ENTER 1")
// Inicializa el estado para ingresar el primer número
estadoEntrada = 1
// Inicializa el primer número
numero1 = 0
// Inicializa el segundo número
numero2 = 0
// Se ejecuta al iniciar la micro:bit
// Esto es un bucle que se ejecuta continuamente
// En este programa, la mayor parte de la lógica está en los eventos de botones
// y en la función, por lo que este bloque forever no hace nada específico
// en este caso, pero es necesario en MakeCode para mantener el programa activo.
basic.forever(function () {
	
})
