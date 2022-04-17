function CleanMessage(Message){

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s\s+/g, ' ')
    Message = Message.replace(/Ñ/g, 'NN')
    Message = Message.replace(/Á/g, 'A')
    Message = Message.replace(/É/g, 'E')
    Message = Message.replace(/Í/g, 'I')
    Message = Message.replace(/Ó/g, 'O')
    Message = Message.replace(/Ú/g, 'U')
    Message = Message.replace(/Ü/g, 'U')

    return Message
}


/* FUNCIÓN CIFRADO VIGÈNERE */

const Alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

function RollLetter(L, P){
    let i = Alphabet.indexOf(L)
    let p = Alphabet.indexOf(P)

    let NewL = Alphabet[(i+p)%Alphabet.length]

    return NewL
}

function CipherVigenere(message, password){
    let counter = 0
    let S = ""
    
    for(let i=0; i<message.length; i++){
        L = message[i]
        if(Alphabet.includes(L)){
            
            P = password[counter%password.length]
            S += RollLetter(L, P)
            counter++

        } else {
            S += L
        }
    }

    return S
}


// FUNCIONES DE LOS BOTONES
function SendAnswer(){
    const Message = document.getElementById("Message").value
    let Answer = document.getElementById("Answer")

    let Password = CleanMessage(document.getElementById("Password").value) || "A"

    let NewMessage = CleanMessage(Message)
    NewMessage = CipherVigenere(NewMessage, Password)

    Answer.value = NewMessage
}