//choosing no of players through buttons
const onePlayer = document.querySelector('.one-player')
const twoPlayer = document.querySelector('.two-player')
const players = document.querySelector('.players')
const info = document.querySelector('.info-message')
const header = document.querySelector('.choice')
const buttons = header.querySelectorAll('button')

let name1 = 'iffath'
let name2 = 'dt'
let currentPlayer = 'iffath'

//create an array the has winning conditions and a gamestate
let gameProgress = ["", "", "", "", "", "", "", "", ""]
gameOver = false
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const grid = document.querySelector('.grid')
const btn = grid.querySelectorAll('button')

btn.forEach(gridButton => {
    gridButton.addEventListener('click',handleCellClicked)
});

function handleCellClicked(event){
    const cell = event.target
    console.log(cell)
    const cellIndex = cell.dataset.num
    console.log(cell.dataset.num)
    console.log(gameProgress[cellIndex])
    cell.disabled = true
    handleInput(cell,cellIndex)
}

function handleInput(cell,cellIndex){
    gameProgress[cellIndex] = currentPlayer
    cell.textContent = currentPlayer
    console.log(gameProgress)
}



//get the button clicked and display vs option
// function noOfPlayers(event){
//     buttons.forEach(button => {
//         button.disable = true
//     });
//     choice = event.target
//     if(choice.className === 'one-player'){
//         name1 = prompt('Enter Your Name')
//         players.textContent = `${name1} vs Computer`
//         console.log(name1)
//         playerTurn(name1)
//     }
//     else{
//         name1 = prompt('Player 1: Enter your Name')
//         name2 = prompt('Player 2: Enter your Name') 
//         players.textContent = `${name1} vs ${name2}`
//         playerTurn2(name1,name2)
//     }
// }

// buttons.forEach(button => {
//     button.addEventListener('click',noOfPlayers)
// });


// function playerTurn(name1){
//     if(currentPlayer != name1){
//     currentPlayer = name1
//     info.textContent = `It is ${currentPlayer}'s turn`
//     }
//     else{
//     currentPlayer = 'Computer'
//     info.textContent = `It is ${currentPlayer}'s turn`
//     }
//     return currentPlayer
// }

// function playerTurn2(name1,name2){
//     if(currentPlayer != name1){
//     currentPlayer = name1
//     info.textContent = `It is ${currentPlayer}'s turn`
//     }
//     else{
//     currentPlayer = name2
//     info.textContent = `It is ${currentPlayer}'s turn`
//     }
//     return currentPlayer
// }



// function infoMessage(name1){
//     info.textContent = `It is ${name1}'s turn`
// }

// function infoMessage2(name1,name2){
//     info.textContent = `It is ${name1}'s turn`
// }

