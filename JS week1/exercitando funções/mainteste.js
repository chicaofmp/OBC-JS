//Greeting PILOT!
function cumprimentarPiloto() {
    console.log("Hello, Pilot!")
}
cumprimentarPiloto()

//Greeting pilot 2; COM Parâmentros e Valores PADRÃO!

function cumprimentarPiloto2(pilotName, message = "Escreva a sua mensagem.") {

    console.log("ola, " + pilotName + "\n" + message)

}
cumprimentarPiloto2() 



// Operações matemáticas: SOMA
function soma(a, b) {

    let sum = a + b
    console.log("O valor da some é: " + sum)
    return sum
}


function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log("a nova velocidade é: " + newVelocity + " km/s")
}

