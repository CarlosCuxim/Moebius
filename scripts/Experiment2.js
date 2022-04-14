function Cipher(Message){

    Message = Message.trim()
    Message = Message.toUpperCase()
    Message = Message.replace(/\s\s+/g, ' ')
    Message = Message.replace(/Ñ/g, 'NN')
    Message = Message.replace(/Á/g, 'A')
    Message = Message.replace(/É/g, 'E')
    Message = Message.replace(/Í/g, 'I')
    Message = Message.replace(/Ó/g, 'O')
    Message = Message.replace(/Ú/g, 'U')

    return Message
}

// FUNCIONES DE LOS BOTONES
function SendAnswer(){
    const Message = document.getElementById("Message").value
    let Answer = document.getElementById("Answer")

    let Language = document.getElementById("Languaje").value

    Answer.value = Cipher(Message)

    if(Language=="Galactic"){
        Answer.style.fontFamily = "GalacticStandar"
        Answer.style.fontSize = "20px"
    } else if(Language=="HylianTP") {
        Answer.style.fontFamily = "HylianTP"
        Answer.style.fontSize = "50px"
    } else if (Language=="Sheikah") {
        Answer.style.fontFamily = "Sheikah"
        Answer.style.fontSize = "20px"
    } else if (Language=="Unown") {
        Answer.style.fontFamily = "Unown"
        Answer.style.fontSize = "20px"
    }
}


function AnswerAlert(){
    alert("La respuesta es: ZIRIÑ SIÑ DTFÑQPT RTWTF ÑTL EOYLQRHÑ")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
