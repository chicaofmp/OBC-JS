let departureDateEntry = prompt("Digite a data da partida: Formato (DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")


//moment() retorna a data de HOJE!
let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n")

if(chosenOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de voo: " + secondsOfDeparture + " segundos.")
}   else if(chosenOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de Voo: " + minutesOfDeparture + " minutos.")
}   else if(chosenOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de Voo: " + hoursOfDeparture + " horas.")
}   else if(chosenOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de Voo: " + daysOfDeparture + " dias.")
}    else {
    alert("Opção inválida")
}