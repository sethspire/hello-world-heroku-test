const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
  res.send('Testing. Testing. 1. 2. 3.')
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})