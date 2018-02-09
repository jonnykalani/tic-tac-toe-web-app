'use strict'

<<<<<<< HEAD
const onLogIn = function () {
  console.log('onLogIn worked')
}

<<<<<<< HEAD
=======
let spaceNineX = function () {
  currentBoardStatus[8] = 'X'
}

// And every possibility for 'O'

lt spaceOneO = function () {
  currentBoardStatus[0] = 'X'
}

let spaceTwoO = function () {
  currentBoardStatus[1] = 'X'
}

let spaceThreeO = function () {
  currentBoardStatus[2] = 'X'
}

let spaceFourO = function () {
  currentBoardStatus[3] = 'X'
}

let spaceFiveO = function () {
  currentBoardStatus[4] = 'X'
}

let spaceSixO = function () {
  currentBoardStatus[5] = 'X'
}

let spaceSevenO = function () {
  currentBoardStatus[6] = 'X'
}

let spaceEightO = function () {
  currentBoardStatus[7] = 'X'
}

let spaceNineO = function () {
  currentBoardStatus[8] = 'X'
}

moveAssignment(4)

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


const winChecker = function (array) {
  if ((array[0] === array[1] === array[2] && array[0] !== null) ||
    (array[0] === array[4] === array[8] && array[0] !== null) ||
    (array[0] === array[3] === array[6] && array[0] !== null) ||
    (array[1] === array[4] === array[7] && array[1] !== null) ||
    (array[2] === array[5] === array[8] && array[2] !== null) ||
    (array[3] === array[4] === array[5] && array[3] !== null) ||
    (array[6] === array[7] === array[8] && array[6] !== null) ||
    (array[2] === array[4] === array[6] && array[2] !== null)) {
    console.log('game over')
  } else if (array.length >= 9) {
    console.log('tie')
  } else {
    console.log('next move')
  }
}

>>>>>>> game-logic
=======
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
//const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  gameApi.signUp(data)
    .then(gameUi.onSignUpSuccess)
    .catch(gameUi.onError)
  console.log('data is ', data)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  gameApi.signIn(data)
    .then(gameUi.onSignInSuccess)
    .catch(gameUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.signOut(data)
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut
}

>>>>>>> api
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
