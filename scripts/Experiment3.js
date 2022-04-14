function Cipher(Message){

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s\s+/g, '')

    return Message
}

function strToBin(string){
    let n = string.length
    let V = 0
    for(let i=0; i<n; i++){
        let C = string[i]
        let b = 0
        if(C=="0"){
            b = 0
        } else {
            b = 1
        }

        V = V + 2**(n-1-i) * b
    }
    return V
}

function strToOct(string){
    let n = string.length
    let V = 0
    for(let i=0; i<n; i++){
        let C = string[i]
        let b = 0

        switch(C){
            case "0": b = 0; break;
            case "1": b = 1; break;
            case "2": b = 2; break;
            case "3": b = 3; break;
            case "4": b = 4; break;
            case "5": b = 5; break;
            case "6": b = 6; break;
            default: b = 7;
        }

        V = V + 8**(n-1-i) * b
    }
    return V
}

function strToHex(string){
    let n = string.length
    let V = 0
    for(let i=0; i<n; i++){
        let C = string[i]
        let b = 0

        switch(C){
            case "0": b = 0; break;
            case "1": b = 1; break;
            case "2": b = 2; break;
            case "3": b = 3; break;
            case "4": b = 4; break;
            case "5": b = 5; break;
            case "6": b = 6; break;
            case "7": b = 7; break;
            case "8": b = 8; break;
            case "9": b = 9; break;
            case "A": b = 10; break;
            case "B": b = 11; break;
            case "C": b = 12; break;
            case "D": b = 13; break;
            case "E": b = 14; break;
            default: b = 15;
        }

        V = V + 16**(n-1-i) * b
    }
    return V
}

function strToNumber(string, base, sep){
    let List = string.split(sep)
    let n = List.length
    let V = 0
    for(let i=0; i<n; i++){
        C = List[i]
        b = parseInt(C)

        V = V + base**(n-1-i) * b
    }

    return V
}


function changeBaseEvent(value) {
    let Base = document.getElementById("Base").value
    let MyBase = document.getElementById("MyBase")

    if(Base=="Personalizado"){
        MyBase.style.visibility = "visible"
    } else {
        MyBase.style.visibility = "hidden"
    }
}


// FUNCIONES DE LOS BOTONES
function SendAnswer(){
    const Message = document.getElementById("Number").value
    let Answer = document.getElementById("Answer")
    let Base = document.getElementById("Base").value

    let AnsValue = Cipher(Message)

    if(Base=="bin"){
        AnsValue = strToBin(AnsValue)
    } else if(Base=="oct"){
        AnsValue = strToOct(AnsValue)
    } else if(Base=="hex"){
        AnsValue = strToHex(AnsValue)
    } else {
        let MyBase = parseInt(document.getElementById("MyBase").value)
        AnsValue = strToNumber(AnsValue, MyBase, ",")
    }

    Answer.value = AnsValue
}


function AnswerAlert(){
    alert("La respuesta es: ZIRIÑ SIÑ DTFÑQPT RTWTF ÑTL EOYLQRHÑ")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
