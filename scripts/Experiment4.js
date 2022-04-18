function CleanMessage(Message){

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s/g, '')

    return Message
}


function strToDigits(string, base){
    let List = []
    let n = parseInt(string)

    while(n>0){
        d = n%base
        List.unshift(d)
        n = (n-d)/base
    }

    return List
}

function listToBOH(list){
    let n = list.length
    let S = ""
    for(let i=0; i<n; i++){
        let C = list[i]
        switch(C){
            case 10: S+= "A"; break;
            case 11: S+= "B"; break;
            case 12: S+= "C"; break;
            case 13: S+= "D"; break;
            case 14: S+= "E"; break;
            case 15: S+= "F"; break;
            default: S+= String(C)
        }
    }
    return S
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
    let MyBase = document.getElementById("MyBase").value

    let AnsValue = CleanMessage(Message)

    if(Base == "bin"){
        AnsValue = strToDigits(AnsValue, 2)
        AnsValue = listToBOH(AnsValue)
    } else if(Base == "oct") {
        AnsValue = strToDigits(AnsValue, 8)
        AnsValue = listToBOH(AnsValue)
    } else if(Base == "hex") {
        AnsValue = strToDigits(AnsValue, 16)
        AnsValue = listToBOH(AnsValue)
    } else {
        AnsValue = strToDigits(AnsValue, MyBase)
        AnsValue = AnsValue.toString()
    }

    Answer.value = AnsValue
}