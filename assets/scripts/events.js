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

const onClickCell = function (event) {
  console.warn(event)
  const cellIndex = event.data.cellIndex
  const cellClass = event.data.cellClass
  event.preventDefault()
  gameLogic.playerMove(cellIndex)
  gameUi.cellClick(cellIndex, cellClass)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.cell-zero').on('click', {cellIndex: 0, cellClass: '.cell-zero'}, onClickCell)
  $('.cell-one').on('click', {cellIndex: 1, cellClass: '.cell-one'}, onClickCell)
  $('.cell-two').on('click', {cellIndex: 2, cellClass: '.cell-two'}, onClickCell)
  $('.cell-three').on('click', {cellIndex: 3, cellClass: '.cell-three'}, onClickCell)
  $('.cell-four').on('click', {cellIndex: 4, cellClass: '.cell-four'}, onClickCell)
  $('.cell-five').on('click', {cellIndex: 5, cellClass: '.cell-five'}, onClickCell)
  $('.cell-six').on('click', {cellIndex: 6, cellClass: '.cell-six'}, onClickCell)
  $('.cell-seven').on('click', {cellIndex: 7, cellClass: '.cell-seven'}, onClickCell)
  $('.cell-eight').on('click', {cellIndex: 8, cellClass: '.cell-eight'}, onClickCell)
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickCell
}
