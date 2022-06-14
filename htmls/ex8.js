let spaceshipName = prompt("Qual é o nome da nave? ")

let forbiddenChar = prompt("Qual é o caractere proibido? ")

let newSpaceshipName = ""

/*
for (let i = 0; i < spaceshipName.length; i++) {
    
    console.log(spaceshipName[i])
}
*/

for (let i = spaceshipName.length -1; i >= 0 ; i--) {

    if(spaceshipName[i] == forbiddenChar) {
        break
    }
    newSpaceshipName += spaceshipName[i]
}
console.log(spaceshipName)
console.log(newSpaceshipName)

alert("Nome original da nave: " + spaceshipName + "\nNome Invertido e pausado após o caractere proibido(se tiver): \n "+ newSpaceshipName)