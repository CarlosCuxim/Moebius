function SendAnswer(){
    let Answer1 = document.getElementById("number1").value
    let Answer2 = document.getElementById("number2").value
    let Answer3 = document.getElementById("number3").value
    let Answer4 = document.getElementById("number4").value
    
    let condition = (Answer1=="17")
    condition = condition && (Answer2=="0")
    condition = condition && (Answer3=="12")
    condition = condition && (Answer4=="3")
    
    

    if(condition) {
        alert("CORRECTO")
    } else {
        alert("INCORRECTO")
    }
}


function AnswerAlert(){
    alert("La respuesta es: 17, 0, 12, 3")
}

function HelpAlert(){
    alert("Lo ideal es que aquí se coloque el video de ayuda")
}
