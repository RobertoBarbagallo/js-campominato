var arrayDiNumeriGenerati = [];
var arrayNumeriUtente = []
var numeriDaGenerare = 2;
var numero
var numeroMinimo = 1;
var numeroMassimo = 5;
var gameOver = "Hai perso"
var youWin = "Hai vinto"
var ilPrompt = ("inserisci un numero, attento a non ripeterli. deve essere compreso tra " + numeroMinimo + " e " + numeroMassimo)
var primoControllo
var secondoControllo
var corrispondenza

function randomNum(maxNum, minNum) {
    var rndNum = parseInt((Math.random() * maxNum) + minNum)
    return rndNum
}

function rndNumPush(number, quantityOfTimes, maxRnd, minRnd) {
    var arrayToReturn = [];
    for (var index = 0; index < quantityOfTimes; index++) {
        number = randomNum(maxRnd, minRnd)

        if (arrayToReturn.indexOf(number) > -1) {
            index--
        } else {
            arrayToReturn.push(number)
        }
    }
    return arrayToReturn
}

function numberControl(userInput) {
    var userInputNumber = parseInt(userInput)

    if (Number.isNaN(userInputNumber && !userInput)) {

        return false
    }
    return userInput
}


function numberControlTwo(userInput, minNum, maxNum) {
    var userInputNumber = parseInt(userInput)

    if (userInputNumber < minNum || userInputNumber > maxNum) {

        return false
    }
    return userInput
}

function collectPrompt(range, quantityOfNum){

    var times = range - quantityOfNum
    var userArray = []
    var counter = 1
    var counted =[]
    var doppione = false

    do{
        var userNum = prompt(ilPrompt)
        if (userArray.indexOf(userNum) === -1){
            userArray.push(userNum)
            counted.push(counter)
            primoControllo = numberControl(userNum)
            secondoControllo = numberControlTwo(userNum, numeroMinimo, numeroMassimo)
            corrispondenza = checkInArray(userNum, arrayDiNumeriGenerati, numeroMassimo, numeriDaGenerare)
            userNumIndex = userArray.indexOf(userNum)



        }else{
            console.log (gameOver + " a causa di un doppione")
            doppione = true
            
        }

    }while(counted.length < times && primoControllo && secondoControllo && !corrispondenza  && !doppione)

    if(corrispondenza){
        console.log (gameOver, "hai perso al " + counted.length + "° tentativo")
    }

    if(!primoControllo){
        console.log(gameOver + " perchè non hai inserito un numero")
    }
        
    if(!secondoControllo){
        console.log(gameOver + " perchè hai inserito un numero in un intervallo non valido")
    }

    if (primoControllo && secondoControllo && !corrispondenza  && !doppione){
        console.log(youWin)
    }

    return userArray
}



function checkInArray(searchNum, mainArray, range, quantityOfNum) {
    var times = range - quantityOfNum
    var exist = false

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

    arrayDiNumeriGenerati = rndNumPush(numero, numeriDaGenerare, numeroMassimo, numeroMinimo);

    console.log(arrayDiNumeriGenerati)

    arrayNumeriUtente = collectPrompt(numeroMassimo, numeriDaGenerare)

    console.log(arrayNumeriUtente)


   
    










