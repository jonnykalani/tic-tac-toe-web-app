'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const gameLogic = require('./game-logic')

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

const onClickZero = function (event) {
  event.preventDefault()
  if (gameLogic.currentPlayer === gameLogic.playerX) {
    gameUi.cellZeroClickO()
  } else {
    gameUi.cellZeroClickX()
  }
  gameLogic.playerMove(0, gameLogic.currentPlayer)
}

/*
$(() => {
  setAPIOrigin(location, config)
  $('#cell-zero').on('click', playerMove(0, currentPlayer))
})
*/
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#cell-zero').on('click', function () {
    $('#top-left').text(gameLogic.currentPlayer)
    gameLogic.playerMove(0, gameLogic.currentPlayer)
  })
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickZero
}
