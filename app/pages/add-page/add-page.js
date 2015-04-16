Polymer('add-page', {
  created: function() {
    this.newContact = {
      name: 'John Doe',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg',
      address: 'Sesame Stm 21',
      email: 'john@doe.com',
      phone: '555 3211'
    }
  },

  handleCreateContact: function(event, detail, sender) {
    this.redirect('/contacts/all');
    console.log(detail.response);
  },

  createContact: function() {
    this.$.ajaxCreateContact.go();
  }
});
