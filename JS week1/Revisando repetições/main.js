let spaceshipName = prompt("Qual o nome da aeronave?")

let spaceshipNameInverted = ''

let forbiddenChar = prompt("qual o Caractere proibido?")

//Minha solução: não tinha o -1, por isso ficava incompleto com NaN ou Undefined. 
//Fora isso, o meu if eu coloquei "!=, enquanto o professor colocou igual."

for (let i = spaceshipName.length -1; i >= 0; i--) {
    const element = spaceshipName[i];
 

    if(spaceshipName[i] != forbiddenChar) {
        spaceshipNameInverted += spaceshipName[i]
    } else {
        
    }

}

alert("Nome original: " + spaceshipName + "\nNome invertido: " + spaceshipNameInverted)

console.log(spaceshipName)
console.log(spaceshipNameInverted)


//Solução do Professor:


for(let j = spaceshipName.length -1; i>=0; i--) {

    if(spaceshipName[j] == forbiddenChar) {
        break
    }
    spaceshipNameInverted += spaceshipName[j]
}

alert("Nome original da nave: " + spaceshipName + "\nNome invertido: ")