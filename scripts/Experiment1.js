const Alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

function Cipher(Message){

    let LetterAssignment = new Object()

    for(let i=0; i<Alphabet.length; i++){
        let L = Alphabet[i]

        LetterAssignment[L] = document.getElementById(L).value
    }

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s\s+/g, ' ')

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


function AnswerAlert(){
    alert("La respuesta es: ZIRIÑ SIÑ DTFÑQPT RTWTF ÑTL EOYLQRHÑ")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
