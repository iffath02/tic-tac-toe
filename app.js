const info = document.querySelector('.info-message')

    let player1 = {
        name: 'Iffath',
        symbol: 'X'
    }
    let player2 = {
        name: 'Dt',
        symbol: 'O'
    }

let playerTurn = player1
info.textContent = `${playerTurn.name}'s turn!`
//create an array the has winning conditions and a gamestate

let gameProgress = ["", "", "", "", "", "", "", "", ""]

let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const grid = document.querySelector('.grid')
const btn = grid.querySelectorAll('button')

btn.forEach(gridButton => {
    gridButton.addEventListener('click',handleCellClicked)
});

function handleCellClicked(event){
    const cell = event.target
    console.log(cell)
    const cellIndex = cell.dataset.num
    cell.disabled = true
    handleInput(cell,cellIndex)
    validateInput()
}

function handleInput(cell,cellIndex){
    gameProgress[cellIndex] = playerTurn.symbol
    cell.textContent = playerTurn.symbol
    console.log(gameProgress)
}

function validateInput(){
    let index =0
    let won = false
    for(let i = 0; i <= 7; i++){
        let eachCondition = winningConditions[i]
        let cell1 = gameProgress[eachCondition[0]]
        let cell2 = gameProgress[eachCondition[1]]
        let cell3 = gameProgress[eachCondition[2]]
        if(cell1 =='' || cell2 == '' || cell3 ==''){
            continue
            }
            if(cell1 == cell2 && cell2 == cell3){
            won = true;
            break
        }
    }
        if(won){
            info.textContent = `${playerTurn.name} is the winner!`
            btn.forEach(gridButton => {
                gridButton.disabled = true
            });
            reset.disabled = false
            return
        }
        if(!gameProgress.includes('')){
            btn.forEach(gridButton => {
                gridButton.disabled = true
            });
            info.textContent = `Its a draw`
            reset.disabled = false
            return
        }
        currentPlayerTurn()
    }

function currentPlayerTurn(){
    if( playerTurn.symbol == 'X'){
        playerTurn = player2
    }else {
        playerTurn = player1
    }
    info.textContent = `${playerTurn.name}'s turn`
    return playerTurn
}

function resetGame(){
    reset.disabled = true
    playerTurn = player1
    gameProgress = ["", "", "", "", "", "", "", "", ""];
    btn.forEach(gridButton => {
        gridButton.disabled = false
        gridButton.textContent = ''
    });
    info.textContent = `${playerTurn.name}'s turn`
}

let reset = document.querySelector('.reset-btn')
reset.addEventListener('click', resetGame);
reset.disabled = true

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




//get the button clicked and display vs option
// function noOfPlayers(event){
//     buttons.forEach(button => {
//         button.disabled = true
//     });
//     choice = event.target
//     if(choice.className === 'one-player'){
//         gameComponents.player1.name = prompt('Enter Your Name')
//         gameComponents.player2.name = 'Computer'
//         players.textContent = `${gameComponents.player1.name} vs ${gameComponents.player2.name}`
//         return gameComponents.player1.name, gameComponents.player2.name
//     }
//     else{
//         gameComponents.player1.name = prompt('Player 1: Enter your Name')
//         gameComponents.player2.name = prompt('Player 2: Enter your Name') 
//         players.textContent = `${gameComponents.player1.name} vs ${gameComponents.player2.name}`
//         return gameComponents.player1.name, gameComponents.player2.name
//     }
// }

// buttons.forEach(button => {
//     button.addEventListener('click',noOfPlayers)
// });