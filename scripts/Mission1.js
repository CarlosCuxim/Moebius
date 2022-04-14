function SendAnswer(){
    let Answer = document.getElementById("Answer").value
    Answer = Answer.trim()
    Answer = Answer.toUpperCase()
    Answer = Answer.replace(/\s\s+/g, ' ')
    
    if(Answer == "ZHRHÑ SHÑ DTFÑQPTÑ RTWTF ÑTL EOYLQRHÑ") {
        alert("CORRECTO")
    } else {
        alert("INCORRECTO")
    }
}


function AnswerAlert(){
    alert("La respuesta es: ZHRHÑ SHÑ DTFÑQPTÑ RTWTF ÑTL EOYLQRHÑ")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
