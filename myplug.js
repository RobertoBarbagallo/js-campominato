var arrayDiNumeriGenerati = [];
var arrayNumeriUtente = []
var numeriDaGenerare = 2;
var numeroMinimo = 1;
var numeroMassimo = 5;
var gameOver = "Hai perso"
var youWin = "Hai vinto"
var ilPrompt = ("inserisci un numero, attento a non ripeterli. deve essere compreso tra " + numeroMinimo + " e " + numeroMassimo)
var eNumero
var eNellIntervallo
var corrispondenza

function randomNum(maxNum, minNum) {
    var rndNum = parseInt((Math.random() * maxNum) + minNum)
    return rndNum
}

function rndNumPush(quantityOfTimes, maxRnd, minRnd) {
    var arrayToReturn = [];

    while (arrayToReturn.length < quantityOfTimes){
        var number = randomNum(maxRnd, minRnd)
        if (arrayToReturn.indexOf(number) === -1){
            arrayToReturn.push(number)
        }
    }   
    return arrayToReturn
}

function numberIsNumber(userInput) {
    var userInputNumber = parseInt(userInput)

    if (Number.isNaN(userInputNumber) && !userInput) {

        return false
    }
    return true
}


function numberBetweenValues(userInput, minNum, maxNum) {
    var userInputNumber = parseInt(userInput)

    if (userInputNumber < minNum || userInputNumber > maxNum) {

        return false
    }
    return true
}

function mainLoop(range, quantityOfNum){

    var times = range - quantityOfNum
    var userArray = []
    var doppione = false

    do{
        var userNum = prompt(ilPrompt)
        if (userArray.indexOf(userNum) === -1){
            userArray.push(userNum)
            eNumero = numberIsNumber(userNum)
            eNellIntervallo = numberBetweenValues(userNum, numeroMinimo, numeroMassimo)
            corrispondenza = checkInArray(userNum, arrayDiNumeriGenerati, numeroMassimo, numeriDaGenerare)
            userNumIndex = userArray.indexOf(userNum)



        }else{
            console.log (gameOver + " a causa di un doppione")
            doppione = true
            
        }

    }while(userArray.length < times && eNumero && eNellIntervallo && !corrispondenza  && !doppione)

    if(corrispondenza){
        console.log (gameOver, "hai perso al " + userArray.length + "° tentativo")
    }

    if(!eNumero){
        console.log(gameOver + " perchè non hai inserito un numero")
    }
        
    if(!eNellIntervallo){
        console.log(gameOver + " perchè hai inserito un numero in un intervallo non valido")
    }

    if (eNumero && eNellIntervallo && !corrispondenza  && !doppione){
        console.log(youWin)
    }

    return userArray
}



function checkInArray(searchNum, mainArray, range, quantityOfNum) {
    var exist = false
    var times = range - quantityOfNum

    for (var index = 0; index < times; index++) {
        var element = mainArray[index]
        element = parseInt(element)
        searchNum = parseInt (searchNum)


        if (element === searchNum) {
            exist = true
        } 
    }

    return exist
}

    arrayDiNumeriGenerati = rndNumPush(numeriDaGenerare, numeroMassimo, numeroMinimo);

    console.log(arrayDiNumeriGenerati)

    arrayNumeriUtente = mainLoop(numeroMassimo, numeriDaGenerare)

    console.log(arrayNumeriUtente)


   
    










