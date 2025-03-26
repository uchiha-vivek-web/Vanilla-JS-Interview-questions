const incButton = document.getElementById('inc-count')
const decButton = document.getElementById('dec-count')


const currentCountDiv = document.getElementById('current-count')
let count =  0 
currentCountDiv.textContent = count

const counterChange = (type) => {
    type==='inc' ? count++ : count--
    currentCountDiv.textContent=count
}

incButton.addEventListener('click',() => counterChange('inc'))
decButton.addEventListener('click',()=> counterChange('dec'))