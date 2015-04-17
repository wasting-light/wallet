Polymer('all-page', {
  created: function() {
    var _this = this;
    this.contacts = [];

    this.socket = this.getSocket();

    this.socket.on('contact-added', function() {
      _this.getContacts();
    });

    this.socket.on('contact-deleted', function() {
      _this.getContacts();
    })
  },

  getContacts: function() {
    this.$.ajaxGetContacts.go();
  },

  handleGetContacts: function(event, detail, sender) {
    this.contacts = detail.response;
  },

  togglePanel: function() {
    var drawerPanel = document.querySelector('html /deep/ #drawerPanel');

    drawerPanel.togglePanel();
  },

});
