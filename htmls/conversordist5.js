let lightYears = prompt("Qual a distância em anos-luz? ")

let lightYearsToPc = (lightYears * 0.306601)
let lightYearsToUa = (lightYears * 63241.1)
let lightYearsToKm = (lightYears * 9.5 * Math.pow(10,12))

let unitTypes = prompt("Escolha a unidade de conversão:\n1- Parsec(pc)\n2- Unidade Astrônomica(AU)\n3- Quilômetros(km)")


//Conversão usando o Switch

switch(unitTypes) {
    case "1": 
        alert("O valor convertido de anos-luz " + lightYears + "ly para Parsec é: " + lightYearsToPc + "pc")
    break;
    case "2":
        alert("O valor convertido de anos-luz " + lightYears + "ly para unidade astronômica é: " + lightYearsToUa + "UA")
        break;
    case "3":
        alert("O valor convertido de anos-luz " + lightYears + "ly para Quilômetro(Km) é: " + lightYearsToKm + "Km")
        break;
    default: 
        alert("Unidade de conversão inválida. Escolha \n 1. Parsec\n 2. Unidade astrônomica \n 3. Quilômetros  ")
}


//Conversão usando o if
/*
if(unitTypes == "1") {
    alert("O valor convertido de anos-luz " + lightYears + "ly para Parsec é: " + lightYearsToPc + "pc")
}  else if(unitTypes == "2") {
    alert("O valor convertido de anos-luz " + lightYears + "ly para unidade astronômica é: " + lightYearsToUa + "UA")
}  else if(unitTypes == "3") {
    alert("O valor convertido de anos-luz " + lightYears + "ly para Quilômetro(Km) é: " + lightYearsToKm + "Km")
}   else {
    alert("Unidade de conversão inválida. Escolha \n 1. Parsec\n 2. Unidade astrônomica \n 3. Quilômetros  ")
} 
*/

console.log("Distâncis convertida para parsec(pc):\n " + lightYearsToPc + "pc")
console.log("Distâncis convertida para unidade astronômica(UA):\n " + lightYearsToUa + "UA")
console.log("Distâncis convertida para Quilômetros(Km):\n"  + lightYearsToKm + "Km")