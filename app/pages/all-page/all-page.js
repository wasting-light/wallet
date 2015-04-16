Polymer('all-page', {
  created: function() {
    this.contacts = [];
  },

  handleGetContacts: function(event, detail, sender) {
    this.contacts = detail.response;
  },

  togglePanel: function() {
    var drawerPanel = document.querySelector('html /deep/ #drawerPanel');

    drawerPanel.togglePanel();
  },

});
