Restaurant.FoodsRoute = Ember.Route.extend({
  setupController: function(controller, food) {
    controller.set('model', restaurant.get('foods'));
  }
});
