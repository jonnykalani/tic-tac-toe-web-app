'use strict'

const signUp = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp
}
