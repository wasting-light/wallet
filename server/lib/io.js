function init(io) {
  io.on('connection', function(socket) {
    socket.on('contact-added', function(msg) {
      socket.emit('contact-added');
    });

    socket.on('contact-deleted', function() {
      socket.emit('contact-deleted');
    });
  });
};

module.exports = init;
