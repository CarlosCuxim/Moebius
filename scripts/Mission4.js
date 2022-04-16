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
        Swal.fire({
            icon: 'success',
            title: '¡CORRECTO!',
            text: 'El código de la misión es: KB2D',
            footer: '<a href="./Experiment4.html">Experimentar</a>'
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡INCORRECTO!',
            text: 'Intente de nuevo'
          })
    }
}


function AnswerAlert(){
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Recomiendo intentar el problema primero",
        icon: 'warning',
        showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        cancelButtonColor: '#c11d24',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            html: 'La respuesta es:</br>17, 0, 12, 3',
            icon: 'warning'
          })
        }
      })
}

function HelpAlert(){
    Swal.fire({
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8f0XrY-Id_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <center>VIDEO DE PRUEBA</center>`,
        width: 700,
        icon: "info"
    })
}
