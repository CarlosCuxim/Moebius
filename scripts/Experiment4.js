function CleanMessage(Message){

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s/g, '')

    return Message
}

function strToBin(string){
    let n = string.length
    let V = 0
    for(let i=0; i<n; i++){
        let C = string[i]
        let b = parseInt(C)

        V = V + 2**(n-1-i) * b
    }
    return V
}

function strToOct(string){
    let n = string.length
    let V = 0
    for(let i=0; i<n; i++){
        let C = string[i]
        let b = parseInt(C)

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
            case "A": b = 10; break;
            case "B": b = 11; break;
            case "C": b = 12; break;
            case "D": b = 13; break;
            case "E": b = 14; break;
            case "F": b = 15; break;
            default: b = parseInt(C);
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

    let AnsValue = CleanMessage(Message)

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