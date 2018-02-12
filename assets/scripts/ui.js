'use strict'

const store = require('./store')

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
  $('#cell-zero').text('X')
}

const cellZeroClickO = function () {
  $('#cell-zero').text('O')
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
  cellZeroClickO,
  cellZeroClickX
}
