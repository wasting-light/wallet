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

  domReady: function() {
    this.$.list.updateSize();
    this.ready = true;
  },

  getContacts: function() {
    this.$.ajaxGetContacts.go();
  },

  handleGetContacts: function(event, detail, sender) {
    this.contacts = detail.response;
    this.$.list.updateSize();
  },

  togglePanel: function() {
    var drawerPanel = document.querySelector('html /deep/ #drawerPanel');

    drawerPanel.togglePanel();
  },

});
