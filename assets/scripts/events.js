'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')


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
    .catch(gameUi.onSignInError)
  console.log('data is ', data)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onChangePassword
}


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
