Polymer('contacts-page', {
  created: function() {
    this.drawerLinks = [{
      name: 'All Contacts',
      route: 'all',
      href: '/contacts/all'
    }, {
      name: 'Favorites',
      route: 'favorites',
      href: '/contacts/favorites'
    }, {
      name: 'Circles',
      route: 'circles',
      href: '/contacts/circles'
    }];
  },

  routeChanged: function() {
    console.log(this.route);
  },

  navigate: function(event, detail, sender) {
    var href = sender.getAttribute('href');

    this.fire('change-route', href);
  },

  closeDrawer: function() {
    this.$.drawerPanel.closeDrawer();
  }
});
