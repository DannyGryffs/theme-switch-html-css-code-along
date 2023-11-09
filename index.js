console.log('hello world')

let count = 0

const h1 = document.querySelector('h1')

//1. select element

const resetButton = document.querySelector('#rstBtn')

const plusButton = document.querySelector('#plusBtn')

const minusButton = document.querySelector('#minBtn')

const themeButtons = document.querySelectorAll('.theme-buttons')
console.log(themeButtons)

const selectTheme = (event) => {
    let theme = event.target.textContent.toLowerCase()
    console.log(theme)
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
}


//2. write a func

const reset = () => {
    count = 0
    console.log(count)
    h1.innerText = count
}
const sub = () => {
    count--
    console.log(count)
    h1.innerText = count
}
const add = () => {
    count++ 
    console.log(count)
    h1.innerText = count
}

// const selectTheme = (event) => {
//     let theme = event.target.textContent
//     console.log(theme)
// }
for(let i = 0; i < themeButtons.length; i++){
    console.log(themeButtons[i].textContent)
    themeButtons[i].addEventListener('click', selectTheme)
};




//3. combine w eventListener

resetButton.addEventListener('dblclick', reset)

plusButton.addEventListener('click', add)

minusButton.addEventListener('click', sub)

selectTheme.addEventListener('click', )
