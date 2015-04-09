Polymer('info-page', {
  handleResponse: function(event, detail, sender) {
    this.contact = detail.response;

    if(this.largeScreen) return;

    this.$.scrollHeaderPanel.$.headerBg.style.background = 'url(' + this.contact.avatar + ') 0 / cover no-repeat';
    // this.$.toolbar.style.background = 'url('+this.contact.avatar+') 0 / cover no-repeat';
  },
});
