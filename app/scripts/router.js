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

    default: function() {
      app.route.name = 'contacts';

      this.setRoute('/contacts/all');
    }
  };

  var info = function() {
    app.route.name = 'info';
  };

  var add = function() {
    app.route.name = 'add';
  };

  var routes = {
    '/add': add,
    '/info': info,
    '/contacts/all': contacts.all,
    '/contacts/favorites': contacts.favorites,
    '/contacts/circles': contacts.circles,
    '/contacts': contacts.default
    // '/contacts?((\w|.)*)': contacts,
  };

  var router = new Router(routes);

  router.init();

  document.addEventListener('change-route', function(event) {
    var detail = event.detail;

    if(detail) {
      router.setRoute(detail);
    }
  });

})(window, document);
