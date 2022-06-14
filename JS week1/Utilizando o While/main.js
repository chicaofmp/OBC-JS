let spaceshipName = prompt("Qual o nome da aeronave?")
let entrarNaDobra = prompt("Deseja entrar na dobra espacial? (digite o número da opção escolhida) \n1. Sim \n2. Não ")
let contadorDeDobra = 0




while (entrarNaDobra == 1) {
    contadorDeDobra +=1
    entrarNaDobra = prompt("Deseja entrar na PROXIMA DOBRA ESPACIAL?\n1. Sim\n2. Não")
}   

alert("Nome da nave: " + spaceshipName + "\nQuantidade de vezes que entrou na dobra: " + contadorDeDobra)