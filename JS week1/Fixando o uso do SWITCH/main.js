let lightYear = prompt("Qual a distância em anos-luz? ")

let conversorTypes = prompt("Escolha a oção de conversão: (Digite o número desejado) \n1.Parsec(pc)\n2.Unidade astronônima(AU)\n3.Quilômetros(km)\n4.Mostrar todas as conversões")

let parsec = 0.306601*lightYear + "pc"
let unidadeAstrononima = 63241.1*lightYear + "AU"
let quilometros = (9.5 * Math.pow(10, 12))* lightYear + "Km"
let allTypes = parsec + "\n" + unidadeAstrononima + "\n" + quilometros


switch (conversorTypes) {
    case "1":
        console.log(parsec)
        break;
    case "2":
        console.log(unidadeAstrononima)
        break;
    case "3":
        console.log(quilometros)
        break;
    case "4":
        alert("Distância em anos-luz: " + lightYear + "\n" + allTypes)
        console.log("Distância em anos-luz: " + lightYear + "\n" + allTypes)
        break;
    default:
        console.log("Opção fora do escopo")
        break;
}