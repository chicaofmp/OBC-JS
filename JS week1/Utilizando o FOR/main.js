//alert("Hello World!")

let spaceshipName = prompt("Qual o nome da aeronave?")
let charChange = prompt("Qual caractere deseja SUBSTITUIR?")
let charChangeFor = prompt("Qual caractere deseja INCLUIR?")

let newSpaceshipName

for (let i = 0; i < spaceshipName.length; i++) {
    const element = spaceshipName[i];
    
   if(spaceshipName[i] == charChange) {
    newSpaceshipName += charChangeFor
   } else {
    newSpaceshipName += spaceshipName[i]
   }

console.log(spaceshipName)
    console.log(newSpaceshipName)
}
