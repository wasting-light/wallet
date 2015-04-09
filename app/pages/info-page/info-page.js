Polymer('info-page', {
  handleResponse: function(event, detail, sender) {
    this.contact = detail.response.all[this.contactId];
  },

  contactIdChanged: function() {
  }
});
