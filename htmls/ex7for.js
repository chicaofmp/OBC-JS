let spaceshipName = prompt("Qual é o nome da nave? ")

let charChange = prompt("Qual caractere você quer substituir? ")

let charChangeNew = prompt("Qual letra substituirá o " + charChange + "?")

let newSpaceshipName = ""

for (let i = 0; i < spaceshipName.length; i++) {
 
    if(spaceshipName[i] == charChange){
        newSpaceshipName += charChangeNew
    } else {
        newSpaceshipName += spaceshipName[i]
    }

    console.log(newSpaceshipName)
    
}  