
const adviceContainer = document.querySelector(".advice-container") 
const adviceId = document.querySelector(".advice-id")
const button = document.querySelector("button")


function advice(){
    fetch("https://api.adviceslip.com/advice")
    .then((respuesta)=> respuesta.json())
    .then(datos => {
        console.log(datos)
        adviceContainer.innerHTML = `<h1>"${datos.slip.advice}"</h1>`
        adviceId.innerHTML = `${datos.slip.id}`
    })
}
// imprimo un consejo al abrir la página
advice()

// imprimo consejos al presionar el botón
button.addEventListener("click", function(e){
    advice()
})

