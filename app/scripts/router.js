(function(window, document, undefined) {
  'use strict';

  var app = document.querySelector('#app');

  app.route = {};

  var contacts = {
    all: function() {
      app.route.name = 'contacts';

      app.route.subroute = {
        name: 'all'
      };
    },

    favorites: function() {
      app.route.name = 'contacts';

      app.route.subroute = {
        name: 'favorites'
      };
    },

    circles: function() {
      app.route.name = 'contacts';

      app.route.subroute = {
        name: 'circles'
      };
    },

    info: function(id) {
      app.route.name = 'info';

      app.route.detail = {
        id: id
      }
    },

    add: function() {
      app.route.name = 'add';
    },

    default: function() {
      app.route.name = 'contacts';

      this.setRoute('/contacts/all');
    },
  };

  var all = function() {
    app.route.name = 'contacts';

    this.setRoute('/contacts/all');
  };

  var routes = {
    '/add': contacts.add,
    '/info/:id': contacts.info,
    '/contacts/all': contacts.all,
    '/contacts/favorites': contacts.favorites,
    '/contacts/circles': contacts.circles,
    '/contacts': contacts.default,
    '/((\w|.)*)/': all,
    '/': all
  };

  var router = new Router(routes);

  router.init('/');

  document.addEventListener('change-route', function(event) {
    var detail = event.detail;

    if(detail) {
      router.setRoute(detail);
    }
  });

  document.addEventListener('change-route-back', function(e) {
    history.back();
  });

})(window, document);
