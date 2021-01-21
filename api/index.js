const express = require('express')
const app = express()

const hello = require('./hello')
//const reconnect = require('./reconnect')
app.use(hello)

if (require.main === module) {
  const port = 8181
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app