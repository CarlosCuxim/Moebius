function SendAnswer(){
    let Answer = document.getElementById("Answer").value
    Answer = Answer.trim()
    Answer = Answer.toUpperCase()
    Answer = Answer.replace(/\s\s+/g, ' ')
    
    if(Answer == "LOS GATOS SON BONITOS") {
        alert("CORRECTO")
    } else {
        alert("INCORRECTO")
    }
}


function AnswerAlert(){
    alert("La respuesta es: LOS GATOS SON BONITOS")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
