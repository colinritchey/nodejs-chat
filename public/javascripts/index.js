import io from 'socket.io-client';
const ChatUI = require('./chatUI');

document.addEventListener('DOMContentLoaded', () =>{
  const socket = require('socket.io-client')();

  const chatUI = new ChatUI(socket);
  chatUI.getUserInput();
})
