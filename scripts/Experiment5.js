const Alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

/* FUNCIONES AUXILIARES */
function CleanMessage(message) {
    message = message.trim()
    message = message.toUpperCase()
    message = message.replace(/\s\s+/g, ' ')
    message = message.replace(/Á/g, 'A')
    message = message.replace(/É/g, 'E')
    message = message.replace(/Í/g, 'I')
    message = message.replace(/Ó/g, 'O')
    message = message.replace(/Ú/g, 'U')
    message = message.replace(/Ü/g, 'U')

    return message
}

function CountInsideString(string, S){
    let Filter =  new RegExp(S, 'g')
    return (string.match(Filter) || []).length
}

function MaxObjectKey(object) {
    let keys = Object.keys(object)
    let MaxKey = keys[0]

    for(let i=0; i<keys.length; i++){
        let K = keys[i]
        if(object[MaxKey]<object[K]){
            MaxKey = K
        }
    }

    return MaxKey
}



/* FUNCIONES PARA LA ESTADÍSTICA */
function CalcStatistics(message) {
    let CountLetter = {}
    let n = Alphabet.length

    for(let i=0; i<n; i++){
        let L = Alphabet[i]
        let C = CountInsideString(message, L)
        if (C!=0){
            CountLetter[L] = C
        }
    }

    return CountLetter
}


function DictToString(object){
    let S = ""

    while(Object.keys(object).length>0){

        let M = MaxObjectKey(object)
        S += `<li>${M}: ${object[M]}</li>`
        delete object[M]
    }

    return S
}


function StatisticsAction() {
    const Message = document.getElementById("Message").value
    let LetterStatistics = document.getElementById("LetterStatistics")

    let CountLetter = CleanMessage(Message)
    CountLetter = CalcStatistics(CountLetter)
    CountLetter = DictToString(CountLetter)

    LetterStatistics.innerHTML = CountLetter
} 


/* FUNCIONES PARA EL REMPLAZO  */

function getReplaceValues() {
    let n = Alphabet.length
    let LetterAssignment = {}

    for(let i=0; i<n; i++){
        let L = Alphabet[i]
        let R = document.getElementById(L).value
        if(R){
            LetterAssignment[L] = R
        }
    }

    return LetterAssignment
}

function replaceByObj(message, object){
    let keys = Object.keys(object)
    let n = message.length
    let S = ""

    for(let i=0; i<n; i++){
        let L = message[i]
        if(keys.includes(L)){
            S += `<b style="color:red">${object[L]}</b>`
        } else {
            S += L.toLowerCase()
        }
    }
    return S
}


function SendAnswer(){
    const Message = document.getElementById("Message").value
    let Answer = document.getElementById("Answer")

    let LetterAssignment = getReplaceValues()

    let NewMessage = CleanMessage(Message)
    NewMessage = replaceByObj(NewMessage, LetterAssignment)

    Answer.innerHTML = NewMessage
}