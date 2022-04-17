let NombreAgente = document.getElementById("NombreAgente")
let BODY = document.getElementsByTagName("body")[0]
let HEADER = document.getElementsByTagName("header")[0]
let MAIN = document.getElementsByTagName("main")[0]

async function ObtenerNombre() {
    
    const { value: Nombre } = await Swal.fire({
      title: 'Introduzca su nombre',
      input: 'text',
      inputValidator: (value) => {
        if (!value) {
          return 'Escriba un nombre'
        }
      }
    })
    
    if (Nombre) {
        NombreAgente.textContent = Nombre
        BODY.classList.remove("removeBack")
        HEADER.style.visibility = "visible"
        MAIN.style.visibility = "visible"
    }
}

ObtenerNombre()