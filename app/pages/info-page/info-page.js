Polymer('info-page', {
  handleResponse: function(event, detail, sender) {
    this.contact = detail.response;

    console.log(this.contact.isFavorite);

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
  },

  toggleFavorite: function() {
    this.contact.isFavorite = !this.contact.isFavorite;

    var ajax = this.$.ajaxToggleFavorite;

    ajax.url = '/api/contacts/' + this.contact._id;
    ajax.method = 'PUT';
    ajax.params = this.contact;

    ajax.go();
  }
});
