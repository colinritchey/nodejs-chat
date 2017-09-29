const Chat = require('./chat');

function ChatUI(socket){
  this.chat = Chat(socket);

  this.userInput = '';
}

ChatUI.prototype.getUserInput = function(){
  let val = document.querySelector('input').value;
  this.chat.sendMessage(val);

  let element = document.createElement('li');
  let parent = document.getElementById('#msg-list');
  element.innerText = val;
  parent.append(innerText);
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
