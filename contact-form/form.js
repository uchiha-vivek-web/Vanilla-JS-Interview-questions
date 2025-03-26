const form = document.getElementById('contact-form')

const firstNameInput = document.getElementById('first-name')
const emailInput = document.getElementById('email')
const firstNameErrorSpan = document.getElementById('firstNameError')
const emailErrorSpan = document.getElementById('emailError')


const first_name  =""
const email = ""

firstNameInput.addEventListener('change',(e) => {
    first_name=e.target.value
    console.log(first_name)
} )
emailInput.addEventListener('change',(e) => {
    email=e.target.value
    console.log(email)
} )