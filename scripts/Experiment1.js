function CleanMessage(message) {
    message = message.trim()
    message = message.toUpperCase()
    message = message.replace(/\s\s+/g, ' ')
    message = message.replace(/Ñ/g, 'NN')
    message = message.replace(/[ÁÄ]/g, 'A')
    message = message.replace(/[ÉË]/g, 'E')
    message = message.replace(/[ÍÏ]/g, 'I')
    message = message.replace(/[ÓÖ]/g, 'O')
    message = message.replace(/[ÚÜ]/g, 'U')

    return message
}

// FUNCIONES DE LOS BOTONES
function SendAnswer(){
    const Message = document.getElementById("Message").value
    let Answer = document.getElementById("Answer")
    let Language = document.getElementById("Languaje").value

    Answer.classList.remove("GalacticFont", "HylianFont", "SheikahFont", "UnownFont")

    if(Language=="Galactic"){
        Answer.classList.add("GalacticFont")
    } else if(Language=="HylianTP") {
        Answer.classList.add("HylianFont")
    } else if (Language=="Sheikah") {
        Answer.classList.add("SheikahFont")
    } else if (Language=="Unown") {
        Answer.classList.add("UnownFont")
    }

    Answer.value = CleanMessage(Message)
}