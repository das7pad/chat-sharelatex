const ChatClient = require('./helpers/ChatClient')
const ChatApp = require('./helpers/ChatApp')

before(function waitForDBConnection(done) {
  // mongo driver might request an ipv6 socket which in turn may timeout
  this.timeout(12 * 1000)
  ChatApp.ensureRunning(() => {
    ChatClient.getGlobalMessages('000000000000000000000000', done)
  })
})
