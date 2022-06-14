let spaceshipName = prompt("Qual é o nome da nave? ")

let entrarDobraEspacial

let contadorDobra = 0



while((entrarDobraEspacial = prompt("Deseja entrar na dobra espacial? \n 1- Sim\n2- Não") == "1")) {
    contadorDobra = contadorDobra + 1;
    console.log(contadorDobra)
    alert("Contador de dobra = " + contadorDobra)
}

alert("O nome da name: " + spaceshipName + "\nA nave entrou na dobra: " + contadorDobra + " vezes.")