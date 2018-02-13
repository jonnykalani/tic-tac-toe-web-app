'use strict'

const store = require('./store')
const gameLogic = require('./game-logic.js')

const onSignUpSuccess = function () {
  console.log('signed up')
}

const onError = function () {
  console.log('something went wrong')
}

const onSignInSuccess = function (data) {
  $('#sign-in-message').text('Signed In Successfully')
  $('#sign-in-message').css('background-color', 'green')
  $('#sign-in').hide()
  $('.game-board').show()
  $('.change-password-button').show()
  $('#sign-out').show()
  $('.new-game-button').show()
  $('#sign-in-box').modal('hide')
  $('#modal-button').hide()
  console.log(data)
  store.user = data.user
  console.log('Signed in')
}

const onSignInFailure = function (error) {
  console.log(error)
  $('#sign-in-message').text('Error on logging in')
  $('#sign-in-message').css('font-size', '48px')
}

const changePasswordSuccess = function (data) {
  $('#change-message').text('change success!')
  $('#change-message').css('font-size', '48px').css('font-weight', 'bold').css('text-align', 'center')
  console.log('change success!')
}

const changePasswordFailure = function (error) {
  $('#change-message').text('Error on change password')
  $('#change-message').css('font-size', '48px')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#sign-out-message').text('Successfully signed out!')
  $('#sign-out-message').css('font-size', '48px')
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('error on sign out')
  $('#sign-out-message').css('font-size', '48px')
}

const newGameSuccess = function (data) {
  $('#new-game-message').text('Successfully created a new game!')
  $('#new-game-message').css('font-size', '48px')
  store.game = data.game
  console.log(data)
  console.log(store.game)
}

const newGameFailure = function (data) {
  $('#new-game-message').text('error on create game')
  $('#new-game-message').css('font-size', '48px')
}

const cellClick = function (cellIndex, cellClass) {
  $(cellClass).text(gameLogic.currentBoard[cellIndex])
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  cellClick
}
