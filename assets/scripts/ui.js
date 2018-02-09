'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  console.log('signed up')
}

const onError = function () {
  console.log('something went wrong')
}

const onSignInSuccess = function (data) {
  $('#signIn-message').text('Signed In Successfully')
  $('#signIn-message').css('background-color', 'green')
     console.log(data)
     store.user = data.user
     console.log('Signed in')
}

const onSignInFailure = function (error) {
  console.log(error)
  $('#log-in-message').text('Error on logging in')
  $('#log-in-message').css('font-size', '48px')
}

const changePasswordSuccess = function (data) {
  $('#change-message').text('change success!')
  $('#change-message').css('font-size', '48px').css('font-weight', 'bold').css('text-align', 'center')
  console.log('change success!')
}

const changePasswordFailure = function (error) {
  $('#change-message').text('Error on change password')
  $('#change-password').css('font-size', '48px')
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

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
