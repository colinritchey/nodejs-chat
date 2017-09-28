const io = require('socket.io');

let guestNum = 1;
let nickNames = {};

const createChat = {
  listen: function(server){
    chat = io(server)

    chat.on('connection', (socket) => {
      console.log(socket.id);

      nickNames[socket.id] = `guestUser${guestNum}`;

      console.log(nickNames);

    });

    chat.on('nicknameChangeRequest', (name) => {
      if(Object.keys(nickNames).map((id) => nickNames[id]).includes(name)){
        // console.log('duplicate')
        socket.emit('duplicate')
      } else {
        console.log('welocome ' + name)
        nickNames[socket.id] = name;
        socket.emit('welocome ' + name);
      }
    });

    chat.on('disconnect', (socket) => {
      console.log('disconnecting');
      delete nickNames[socket.id];
    })

  }
}

module.exports = createChat;
