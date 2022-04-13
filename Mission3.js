function SendAnswer(){
    let Answer = document.getElementById("Answer").value
    Answer = Answer.trim()
    Answer = Answer.toUpperCase()
    Answer = Answer.replace(/\s\s+/g, ' ')
    
    if(Answer == "2022") {
        alert("CORRECTO")
    } else {
        alert("INCORRECTO")
    }
}


function AnswerAlert(){
    alert("La respuesta es: 2022")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
