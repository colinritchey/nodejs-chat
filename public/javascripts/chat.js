function Chat(socket){
  this.socket = socket;
}

Chat.prototype.sendMessage = function(message){
  this.socket.emit(message);
}

Chat.prototype.processCommand = function(command){
  let [action, data] = command.split(' ');
  if(action === '/nick'){
    this.socket.emit('nicknameChangeRequest', data);
  }
}


// class Chat {
//   constructor(socket){
//     this.socket = socket;
//   }
//
//   sendMessage(message){
//     this.socket.emit(message);
//   }
//
//   processCommand(command){
//     let [action, data] = command.split(' ');
//     if(action === '/nick'){
//       this.socket.emit('nicknameChangeRequest', data);
//     }
//   }
//
// }

module.exports = Chat;
