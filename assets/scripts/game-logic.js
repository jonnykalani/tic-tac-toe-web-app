'use strict'

const gameApi = require('./api.js')

let currentBoard = []

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
let oppositePlayer
const otherPlayer = function () {
  if (currentPlayer === playerX) {
    oppositePlayer = playerO
  } else {
    oppositePlayer = playerX
  }
}

const endGame = function () {
  $('.cell-zero').text('')
  $('.cell-one').text('')
  $('.cell-two').text('')
  $('.cell-three').text('')
  $('.cell-four').text('')
  $('.cell-five').text('')
  $('.cell-six').text('')
  $('.cell-seven').text('')
  $('.cell-eight').text('')
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
    otherPlayer()
    gameApi.updateGameOver()
    $('#new-game-message').text(oppositePlayer + ' wins!')
    console.log('a win was detected')
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
    $('#new-game-message').text(currentPlayer + ', take your turn!')
    return false
  } else {
    $('#new-game-message').text('tie')
    gameApi.updateGameOver()
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
}

const pushMove = function (i) {
  if ((currentBoard[i] === 'X') || (currentBoard[i] === 'O')) {
    $('#new-game-message').text('sorry! this space is already occupied!')
  } else if (winChecker(currentBoard) === true) {
    $('#new-game-message').text('the game is over')
  } else {
    currentBoard[i] = currentPlayer
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
