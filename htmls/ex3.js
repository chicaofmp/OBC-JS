console.log("Inicializando o sistema...")

let spaceshipSpeed = 0

let pilotName = prompt("Piloto, Qual é o seu nome? ")

let newSpaceshipSpeed = prompt("Qual a velocidade final pretendida? ")


if (confirm("Confirmando a Nova velocidade de " + newSpaceshipSpeed + "Km/s.")) {
    spaceshipSpeed = newSpaceshipSpeed
    console.log("Velocidade pretendida é: " + spaceshipSpeed)
} else {
    console.log("Sem confirmação, Velocidade atual " + spaceshipSpeed + "Km/s mantida.")
}

if(spaceshipSpeed <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
    } else if(spaceshipSpeed < 40) {
        alert("Você está devagar, podemos aumentar mais")
        } else if(spaceshipSpeed < 80){
            alert("Parece uma boa velocidade para manter")
            } else if (spaceshipSpeed < 100){
                alert("Velocidade alta. Considere diminuir.")
                } else {
                    alert("Velocidade perigosa. Controle automático forçado.")
                }

console.log("Piloto: " + pilotName)
console.log("Velocidade Atual: " + spaceshipSpeed + "Km/s")

alert("Piloto: " + pilotName + "\n" + spaceshipSpeed + "Km/s")