'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const gameLogic = require('./game-logic.js')

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
  gameLogic.playerMove(0)
  gameUi.cellZeroClickX()
}

const onClickOne = function (event) {
  event.preventDefault()
  gameLogic.playerMove(1)
  gameUi.cellOneClickX()
}

const onClickTwo = function (event) {
  event.preventDefault()
  gameLogic.playerMove(2)
  gameUi.cellTwoClickX()
}

const onClickThree = function (event) {
  event.preventDefault()
  gameLogic.playerMove(3)
  gameUi.cellThreeClickX()
}

const onClickFour = function (event) {
  event.preventDefault()
  gameLogic.playerMove(4)
  gameUi.cellFourClickX()
}

const onClickFive = function (event) {
  event.preventDefault()
  gameLogic.playerMove(5)
  gameUi.cellFiveClickX()
}

const onClickSix = function (event) {
  event.preventDefault()
  gameLogic.playerMove(6)
  gameUi.cellSixClickX()
}

const onClickSeven = function (event) {
  event.preventDefault()
  gameLogic.playerMove(7)
  gameUi.cellSevenClickX()
}

const onClickEight = function (event) {
  event.preventDefault()
  gameLogic.playerMove(8)
  gameUi.cellEightClickX()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.cell-zero').on('click', onClickZero)
  $('.cell-one').on('click', onClickOne)
  $('.cell-two').on('click', onClickTwo)
  $('.cell-three').on('click', onClickThree)
  $('.cell-four').on('click', onClickFour)
  $('.cell-five').on('click', onClickFive)
  $('.cell-six').on('click', onClickSix)
  $('.cell-seven').on('click', onClickSeven)
  $('.cell-eight').on('click', onClickEight)
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickZero,
  onClickOne,
  onClickTwo,
  onClickThree,
  onClickFour,
  onClickFive,
  onClickSix,
  onClickSeven,
  onClickEight
}
