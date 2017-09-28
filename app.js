const express = require('express')
const app = express();
const http = require('http').Server(app)
const path = require('path')
// import createChat from './lib/chatServer'
const createChat = require('./lib/chatServer')
createChat.listen(http);

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/" + "index.html");
})

http.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
