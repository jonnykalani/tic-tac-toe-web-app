'use strict'

const gameEvents = require('./events')

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
  $('.container-fluid').css('background-color', 'red')
}

const changePasswordSuccess = function (data) {
  console.log('change success!')
}

const changePasswordFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
