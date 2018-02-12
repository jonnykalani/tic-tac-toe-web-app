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

const cellZeroClickX = function () {
  $('.cell-zero').text(gameLogic.currentBoard[0])
}

const cellOneClickX = function () {
  $('.cell-one').text(gameLogic.currentBoard[1])
}

const cellTwoClickX = function () {
  $('.cell-two').text(gameLogic.currentBoard[2])
}

const cellThreeClickX = function () {
  $('.cell-three').text(gameLogic.currentBoard[3])
}

const cellFourClickX = function () {
  $('.cell-four').text(gameLogic.currentBoard[4])
}

const cellFiveClickX = function () {
  $('.cell-five').text(gameLogic.currentBoard[5])
}

const cellSixClickX = function () {
  $('.cell-six').text(gameLogic.currentBoard[6])
}

const cellSevenClickX = function () {
  $('.cell-seven').text(gameLogic.currentBoard[7])
}

const cellEightClickX = function () {
  $('.cell-eight').text(gameLogic.currentBoard[8])
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
  cellZeroClickX,
  cellOneClickX,
  cellTwoClickX,
  cellThreeClickX,
  cellFourClickX,
  cellFiveClickX,
  cellSixClickX,
  cellSevenClickX,
  cellEightClickX
}
