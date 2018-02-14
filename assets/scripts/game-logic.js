'use strict'

/* this is a potential constructor function to store user data
const User = function (name, id, wins, losses, winPercentage) {
  this.name = name,
  this.id = id,
  this.wins = wins,
  this.losses = losses,
  this.winPercentage = winPercentage
}
// this would be how to make a new user
const jonny = new User('jonny', '2', 888, 9, 'high percentage')
*/

// create a board
let currentBoard = []
// on click event in cell num, currentBoardStatus[num] = 'X' or 'O'
// on

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
let oppositePlayer
let otherPlayer = function () {
  if (currentPlayer === playerX) {
    oppositePlayer = playerO
  } else {
    oppositePlayer = playerX
  }
}

// win checker checks to see if the board matches any of the win possibilities.
// the first else if makes sure none of the spaces are null. If no spaces are
// null, then the board is full and the game is over.

const endGame = function () {
  currentBoard = []
  $('.cell-zero').empty()
  $('.cell-one').empty()
  $('.cell-two').empty()
  $('.cell-three').empty()
  $('.cell-four').empty()
  $('.cell-five').empty()
  $('.cell-six').empty()
  $('.cell-seven').empty()
  $('.cell-eight').empty()
}

const winChecker = function (array) {
  if ((array[0] === array[1] && array[1] === array[2] && array[0] !== undefined) ||
    (array[0] === array[4] && array[4] === array[8] && array[0] !== undefined) ||
    (array[0] === array[3] && array[3] === array[6] && array[0] !== undefined) ||
    (array[1] === array[4] && array[4] === array[7] && array[1] !== undefined) ||
    (array[2] === array[5] && array[5] === array[8] && array[2] !== undefined) ||
    (array[3] === array[4] && array[4] === array[5] && array[3] !== undefined) ||
    (array[6] === array[7] && array[7] === array[8] && array[6] !== undefined) ||
    (array[2] === array[4] && array[4] === array[6] && array[2] !== undefined)) {
    console.log('game over')
    otherPlayer()
    console.log(oppositePlayer + ' wins!')
    $('#new-game-message').text(oppositePlayer + ' wins!')
    endGame()
    return true
  } else if (array[0] == null ||
            array[1] == null ||
            array[2] == null ||
            array[3] == null ||
            array[4] == null ||
            array[5] == null ||
            array[6] == null ||
            array[7] == null ||
            array[8] == null) {
    console.log('next turn')
    return false
  } else {
    console.log('tie')
    endGame()
    return true
  }
}
// this function switches between X and O
const changePlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }
  console.log('current player is ' + currentPlayer) // when function is invoked, it swithches the players turn --> starts with playerOne = 'X'
}

const pushMove = function (i) {
  if ((currentBoard[i] === 'X') || (currentBoard[i] === 'O')) {
    console.log('sorry! this space is already occupied!')
  } else {
    currentBoard[i] = currentPlayer
    console.log(currentBoard)
  }
}

// this next function places an X or O in a specified space on the board
const playerMove = function (i) {
  pushMove(i)
  winChecker(currentBoard)
  changePlayer()
}

module.exports = {
  playerX,
  playerO,
  currentPlayer,
  playerMove,
  winChecker,
  currentBoard,
  changePlayer,
  endGame
}
