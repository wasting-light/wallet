function init(io) {
  io.on('connection', function(socket) {
    socket.emit('test', {hey: 'ho'});

    socket.on('contact-added', function(msg) {
      console.log(msg);
      socket.emit('contact-added');
    });

    socket.on('contact-deleted', function() {
      socket.emit('contact-deleted');
    });
  });
};

module.exports = init;
