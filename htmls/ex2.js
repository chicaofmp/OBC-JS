let olderPersonName = prompt("Qual o nome da pessoa mais velha? ")
let olderPersonAge = prompt("Qual a idade da pessoa mais velha? ")

let youngerPersonName = prompt("Qual o nome da pessoa mais nova? ")
let youngerPersonAge = prompt("Qual a idade da pessoa mais nova? ")

let ageDifference = (olderPersonAge - youngerPersonAge)

console.log("O mais velho \n Nome: " + olderPersonName + "\nIdade: " + olderPersonAge + " anos")

console.log("O mais novo \n Nome: " + youngerPersonName + "\nIdade: " + youngerPersonAge + " anos")

console.log("A Diferença de idade é: " + ageDifference + " anos.")

alert("O mais velho \n Nome: " + olderPersonName + "\nIdade: " + olderPersonAge + " anos" + "\n\nO mais novo \n Nome: " + youngerPersonName + "\nIdade: " + youngerPersonAge + " anos" + "\n\nA Diferença de idade é: " + ageDifference + " anos." )