import { Modal } from "./modal.js"
import { AlertError } from "./alertError.js"
import { calculateIMC, notANumber } from "./utils.js"

//Variáeis
const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

form.onsubmit = event => {
    event.preventDefault()

    const weigth = inputWeigth.value
    const heigth = inputHeigth.value

    const weigthOrHeigthIsNotANumber = notANumber(weigth) || notANumber(heigth)

    if(weigthOrHeigthIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weigth, heigth)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeigth.oninput = () => AlertError.close()
inputHeigth.oninput = () => AlertError.close()



/*3 maneiras de criar e atribuir função a um evento
form.onsubmit = function() {}
form.onsubmit = () => {}

form.onsubmit = handleSubmit
function handleSubmit() {

} */