Polymer('info-page', {
  handleResponse: function(event, detail, sender) {
    this.contact = detail.response;

    this.setScrollHeaderPanelBackground();
  },

  largeScreenChanged: function() {
    if(this.contact) {
      this.setScrollHeaderPanelBackground();
    }
  },

  setScrollHeaderPanelBackground: function() {
    if(this.largeScreen) return;

    this.$.scrollHeaderPanel.$.headerBg.style.background = 'url(' + this.contact.avatar + ') 0 / cover no-repeat';
  }
});
