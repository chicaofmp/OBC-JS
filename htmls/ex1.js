alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let userName = prompt("Qual o seu nome? ")
let userAge = prompt("Qual a sua idade? ")
let confirmAge = confirm("A sua idade é: " + userAge + " anos?")

alert("Nome do usuário: " + userName + ".\n" + "Idade: " + userAge +".\n" + "Confirmação da idade: " + confirmAge + "." ) 

console.log(userName)
console.log(userAge)
console.log(confirmAge)