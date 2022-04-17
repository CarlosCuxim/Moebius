const Alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"


/* FUNCIONES AUXILIARES */
function CleanMessage(message) {
    message = message.trim()
    message = message.toUpperCase()
    message = message.replace(/\s\s+/g, ' ')
    message = message.replace(/[ÁÄ]/g, 'A')
    message = message.replace(/[ÉË]/g, 'E')
    message = message.replace(/[ÍÏ]/g, 'I')
    message = message.replace(/[ÓÖ]/g, 'O')
    message = message.replace(/[ÚÜ]/g, 'U')

    return message
}


/* FUNCIONES PARA EL CIFRADO */

function GetLetterAssignment(inverse=false){
    let LetterAssignment = {}

    for(let i=0; i<Alphabet.length; i++){
        let L = Alphabet[i]
        let P = document.getElementById(L).value

        if(inverse){
            LetterAssignment[P] = L
        } else {
            LetterAssignment[L] = P
        }
    }

    return LetterAssignment
}

function Cipher(Message, LetterAssignment){

    Message = CleanMessage(Message)

    let CypheredMessage = ""

    for(let i=0; i<Message.length; i++){
        let L = Message[i]
        if(Alphabet.includes(L)){
            CypheredMessage = CypheredMessage + LetterAssignment[L]
        } else {
            CypheredMessage = CypheredMessage + L
        }
    }

    return CypheredMessage
}




// FUNCIONES DE LOS BOTONES
function SendAnswer(){
    const Message = document.getElementById("Message").value
    let Answer = document.getElementById("Answer")

    let INVERSE = document.getElementById("INVERSE").checked

    let LetterAssignment = GetLetterAssignment(INVERSE)
    Answer.value = Cipher(Message, LetterAssignment)
}