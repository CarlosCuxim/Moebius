function SendAnswer(){
    Answer = document.getElementById("Answer").value
    Answer = Answer.trim()
    Answer = Answer.toUpperCase()
    Answer = Answer.replace(/\s\s+/g, ' ')
    
    if(Answer == "ZIRIÑ SIÑ DTFÑQPT RTWTF ÑTL EOYLQRHÑ") {
        alert("CORRECTO")
    } else {
        alert("INCORRECTO")
    }
}


function AnswerAlert(){
    alert("La respuesta es: ZIRIÑ SIÑ DTFÑQPT RTWTF ÑTL EOYLQRHÑ")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
