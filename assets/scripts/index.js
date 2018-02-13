'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./events')

$(() => {
  setAPIOrigin(location, config)
  gameEvents.addHandlers()
  $('.game-board').hide()
  $('.change-password-button').hide()
  $('.sign-out').hide()
  $('.new-game-button').hide()
})
