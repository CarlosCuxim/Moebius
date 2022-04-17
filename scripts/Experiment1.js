const Alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

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

function Cipher(Message){

    let LetterAssignment = {}

    for(let i=0; i<Alphabet.length; i++){
        let L = Alphabet[i]

        LetterAssignment[L] = document.getElementById(L).value
    }

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

    Answer.value = Cipher(Message)
}