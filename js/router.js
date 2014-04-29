Restaurant.Router.map(function() {
  this.resource('tables', {  path: '/' });
});

Restaurant.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});
