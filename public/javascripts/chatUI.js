const Chat = require('./chat');

function ChatUI(socket){
  this.chat = Chat(socket);

  this.userInput = '';
}

ChatUI.prototype.getUserInput = function(){
  let val = document.querySelector('input').value;
  this.chat.sendMessage(val);
  return val;
}

ChatUI.prototype.emitMessage = function(message){
  if(message.includes('/nick')){
    this.chat.processCommand(message);
  } else {
    this.chat.sendMessage(message);
  }
}


// class ChatUI {
//   constructor(socket){
//     this.chat = Chat(socket);
//     this.dom = document;
//     this.userInput = '';
//   }
//
//   getUserInput(){
//   }
//
//   emitMessage(message){
//     if(message.includes('/nick')){
//       this.chat.processCommand(message);
//     } else {
//       this.chat.sendMessage(message);
//     }
//
//   }
//
//   //add received messages to the display
//
//
// }

module.exports = ChatUI;
