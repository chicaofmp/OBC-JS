//alert("hi")

let pilotName = prompt("Qual o nome do Piloto? ")
let initialSpeed = 0
let speed

let wantedSpeed = prompt("Qual velocidade você deseja?")

let confirmSpeed = confirm("Tem certeza que deseja acelerar a " + wantedSpeed + " Km/s?" )

if(confirmSpeed === true) {
    speed = wantedSpeed
} else {
    speed = initialSpeed
}

if(speed <= 0) {
    console.log("Nave Parada")
  //  alert("Nave Parada")
} else if (speed < 40) {
    console.log("Você está devagar")
  //  alert("DEVAGAR")
} else if (speed < 80) {
    console.log("Mantenha a velocidade")
  //  alert("MANTER A VELOCIDADE")
}   else if (speed < 100) {
    console.log("Considere diminuir a velocidade")
  //  alert("DIMINUIR a velocidade")
}   else {
    console.log("Velocidade Perigosa, DIMINUIR URGENTE!")
    alert("Velocidade perigosa, DIMINUIR URGENTE!")
}

console.log("Pilot name: " + pilotName + "\nVelocidade atual: " + speed + " Km/s.")

function myFunction() {
    let showPilotName = document.querySelector('.box1').innerHTML = '<h2>Piloto:  </h2>' + pilotName;

    let showSpeed = document.querySelector('.box2').innerHTML = "<h2>Velocidade atual: </h2> " + speed
}

