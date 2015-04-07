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
    this.setHeading();
  },

  closeDrawer: function() {
    this.$.drawerPanel.closeDrawer();
  },

  setHeading: function() {
    switch(this.route.name) {
      case 'all':
        this.heading = 'All';
        break;

      case 'favorites':
        this.heading = 'Favorites';
        break;

      case 'circles':
        this.heading = 'Circles';
        break;
      default:
    }
  }
});
