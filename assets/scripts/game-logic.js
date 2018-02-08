'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./events')

$(() => {
  setAPIOrigin(location, config)
  $('#space-one').on('click', gameEvents.pushToArrayX(0)
)

const games = []

const User = function (name, id, wins, losses, winPercentage) {
  this.name = name,
  this.id = id,
  this.wins = wins,
  this.losses = losses,
  this.winPercentage = winPercentage
}

const jonny = new User('jonny', '2', 888, 9, 'high percentage')

// make an event to display an 'X' in spaceOne

// create a board

let currentBoard = []

// on click event in cell num, currentBoardStatus[num] = 'X' or 'O'
// on

const playerX = 'X'
const playerO = 'O'
let currentPlayer = ''

// win checker checks to see if the board matches any of the win possibilities.
// the first else if makes sure none of the spaces are null. If no spaces are
// null, then the board is full and the game is over.

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
    console.log(currentPlayer + ' wins!')
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
  } else {
    console.log('tie')
  }
}

// this next function places an X or O in a specified space on the board
const playerMove = function (i, player) {
  const pushMove = function () {
    if ((currentBoard[i] === 'X') || (currentBoard[i] === 'O')) {
      console.log('sorry! this space is already occupied!')
    } else {
      currentBoard[i] = player
      console.log(currentBoard)
    }
  }
  pushMove()
  const changePlayer = function () {
    if (player === playerO) {
      currentPlayer = playerX
    } else {
      currentPlayer = playerO
    }
    console.log('current player is ' + currentPlayer) // when function is invoked, it swithches the players turn --> starts with playerOne = 'X'
  }
  changePlayer()
  winChecker(currentBoard)
}

// PlayerTurn function allows game to switch between playerOne ('X') and playerTwo ('O')


// or I can explicitly write out a function for every single possibility for 'X'



// this doesn't work
/*
let winChecker = function (array) {
  for (let i = 0; i < winningCombos.length; i++) {
    if (winningCombos[i] === array) {
      return 'game over'
    }
  }
}
*/

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

module.exports = {

}
