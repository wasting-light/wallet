Polymer('base-page', {
  navigate: function(event, detail, sender) {
    var href = sender.getAttribute('href');

    this.fire('change-route', href);
  },

  redirect: function(href) {
    this.fire('change-route', href);
  },

  goBack: function(event) {
    this.fire('change-route-back');
  },

  getSocket: function() {
    return window.io();
  }
});
