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

function RollLetter(L, P, inverse=false){
    let i = Alphabet.indexOf(L)
    let n = Alphabet.length
    let p = 0

    if(inverse){
        p = (n-Alphabet.indexOf(P))%n
    } else {
        p = Alphabet.indexOf(P)
    }
    

    let NewL = Alphabet[(i+p)%n]

    return NewL
}

function CipherVigenere(message, password, inverse=false){
    let counter = 0
    let S = ""
    
    for(let i=0; i<message.length; i++){
        L = message[i]
        if(Alphabet.includes(L)){
            
            P = password[counter%password.length]
            S += RollLetter(L, P, inverse)
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
    let INVERSE = document.getElementById("INVERSE").checked

    let NewMessage = CleanMessage(Message)
    NewMessage = CipherVigenere(NewMessage, Password, INVERSE)

    Answer.value = NewMessage
}