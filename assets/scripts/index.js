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

// indicates the value (X or O) of the lastMove
let lastMoveId = ''
let currentMoveId = ''

const alternator = function () {
  if (lastMove === 'X') {
    currentMove = 'O'
  } else if (lastMove === 'O') {
    currentMove = 'X'
  }
}

// make an event to display an 'X' in spaceOne

// let spaceOneXImage = function (
//  $('#spaceOne').val('img file')
// )

// create a board



// on click event in cell num, currentBoardStatus[num] = 'X' or 'O'
// on

const pushToArrayX = function (spaceNum) {
  currentBoardStatus[spaceNum] = 'X'
}


// to do: we could maybe have an empty board to .map from for every new game
const emptyBoard = ['', '', '', '', '', '', '', '', '']

let currentBoardStatus = []

const x = 'X'
const o = 'O'

const winChecker = function (array) {
  if ((array[0] === array[1] && array[1] === array[2] && array[0] !== '') ||
    (array[0] === array[4] && array[4] === array[8] && array[0] !== '') ||
    (array[0] === array[3] && array[3] === array[6] && array[0] !== '') ||
    (array[1] === array[4] && array[4] === array[7] && array[1] !== '') ||
    (array[2] === array[5] && array[5] === array[8] && array[2] !== '') ||
    (array[3] === array[4] && array[4] === array[5] && array[3] !== '') ||
    (array[6] === array[7] && array[7] === array[8] && array[6] !== '') ||
    (array[2] === array[4] && array[4] === array[6] && array[2] !== '')) {
    console.log('game over')
  } else if (array.length >= 9) {
    console.log('tie')
  } else {
    console.log('next move')
  }
}

const playerMove = function (i, player) {
  if ((currentBoardStatus[i] === 'X') || (currentBoardStatus[i] === 'O')) {
    return 'error'
  } else {
  currentBoardStatus[i] = player
  console.log(currentBoardStatus)
  }
  winChecker(currentBoardStatus)
}

// PlayerTurn function allows game to switch between playerOne ('X') and playerTwo ('O')
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
  console.log(currentPlayer) // when function is invoked, it swithches the players turn --> starts with playerOne = 'X'
}

const pushToArrayO = function (spaceNum) {
  currentBoardStatus[spaceNum] = 'O'
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
