function SendAnswer(){
    let Answer = document.getElementById("Answer").value
    Answer = Answer.trim()
    Answer = Answer.toUpperCase()
    Answer = Answer.replace(/\s\s+/g, ' ')
    
    if(Answer == "LOS GATOS SON BONITOS") {
        Swal.fire({
            icon: 'success',
            title: '¡CORRECTO!',
            html: 'El código de la misión es: <b class="consola">D0R1</b>',
            footer: '<a href="./Experiment1.html">Experimentar</a>'
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
            html: 'La respuesta es:</br>LOS GATOS SON BONITOS',
            icon: 'warning'
          })
        }
      })
}

function HelpAlert(){
    Swal.fire({
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sSL04hd3TDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <center>VIDEO DE PRUEBA</center>`,
        width: 700,
        icon: "info"
    })
}
