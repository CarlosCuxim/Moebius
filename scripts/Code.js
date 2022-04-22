let MAIN = document.getElementsByTagName("MAIN")[0]
let code1 = document.getElementById("code1")
let code2 = document.getElementById("code2")
let code3 = document.getElementById("code3")
let code4 = document.getElementById("code4")
let SendButton = document.getElementById("SendButton")
let Acceso = document.getElementById("Acceso")

let shake = [
    { transform: "translate(1px, 1px) rotate(0deg)" },
    { transform: "translate(-1px, -2px) rotate(-1deg)" },
    { transform: "translate(-3px, 0px) rotate(1deg)" },
    { transform: "translate(3px, 2px) rotate(0deg)" },
    { transform: "translate(1px, -1px) rotate(1deg)" },
    { transform: "translate(-1px, 2px) rotate(-1deg)" },
    { transform: "translate(-3px, 1px) rotate(0deg)" },
    { transform: "translate(3px, 1px) rotate(-1deg)" },
    { transform: "translate(-1px, -1px) rotate(1deg)" },
    { transform: "translate(1px, 2px) rotate(0deg)" },
    { transform: "translate(1px, -2px) rotate(-1deg)" },
    { transform: "translate(1px, 1px) rotate(0deg)" }
]


/* FUNCIONES DE CAMBIO DE COLOR */
function turnRed(list){
    for(let element of list){
        element.style.color = "red"
        element.style.borderColor = "red"
    }
}

function turnGreen(list){
    for(let element of list){
        element.style.color = "#00ff00"
        element.style.borderColor = "#00ff00"
    }
}



/* FUNCIONES DE ERROR */
function ErrorAction() {
    turnRed([MAIN, code1, code2, code3, code4])
    SendButton.classList.add('REDBUTTON')
    SendButton.classList.remove('GREENBUTTON')
    Acceso.style.visibility = "visible"
    MAIN.animate(shake, {duration: 500})
}

function ResetAction() {
    turnGreen([MAIN, code1, code2, code3, code4])
    SendButton.classList.add('GREENBUTTON')
    SendButton.classList.remove('REDBUTTON')
    Acceso.style.visibility = "hidden"
}



/* MOVER A LA PÁGINA DE FELICITACIONES */
function sendToCongratulationPage() {
    window.location.href = "./Congratulations.html"
}

function sendToRickRoll() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ"
}




/* ACCIÓN DEL BOTÓN */
function ButtonAction(){
    condition = (code1.value == "D0R1") && (code2.value == "WNE0") && (code3.value == "LS3V") && (code4.value == "KB2D")
    rickRoll = (code1.value == "1") && (code2.value == "2") && (code3.value == "3") && (code4.value == "4")

    if(condition===true){
        Acceso.style.visibility = "visible"
        Acceso.style.color = "#00ff00"
        Acceso.textContent = "[ACCESO PERMITIDO]"

        setTimeout(sendToCongratulationPage, 500)
        
    } else if(rickRoll===true) {
        Acceso.style.visibility = "visible"
        Acceso.style.color = "#00ff00"
        Acceso.textContent = "[ACCESO PERMITIDO]"

        setTimeout(sendToRickRoll, 500)
    } else {
        ErrorAction()
        setTimeout(ResetAction, 500)
    }
    
}