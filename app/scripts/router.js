(function(window, document, undefined) {
  'use strict';

  /**
   * The main template element
   */
  var app = document.querySelector('#app');

  /**
   * Listens to when the template is finally bound
   */
  app.addEventListener('template-bound', function() {
    /**
     * The main core-animated-pages element
     */
    var pages = document.querySelector('#pages');

    /**
     * The default route to be used by the router
     */
    var DEFAULT_ROUTE = '/contacts/all';

    var all = function() {
      app.route = 'all';
    };

    var favorites = function() {
      app.route = 'favorites';
    };

    var circles = function() {
      app.route = 'circles';
    };

    /**
     * The paths and route handlers
     */
    var routes = {
      '/contacts/all': all,
      '/contacts/favorites': favorites,
      '/contacts/circles': circles,
    };

    /**
     * The router
     */
    var router = Router(routes);

    /**
     * Inits the router with the default route
     */
    router.init(DEFAULT_ROUTE);
  });
})(window, document);
