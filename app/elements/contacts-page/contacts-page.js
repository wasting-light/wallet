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

  closeDrawer: function() {
    this.$.drawerPanel.closeDrawer();
  }
});
