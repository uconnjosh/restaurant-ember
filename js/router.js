// Restaurant.TableRoute = Ember.Route.extend({
//   model:function() {
//     var multimodel = Ember.Object.create(
//     {
//      tables: Restaurant.Table.find(),
//      foods: Restaurant.Foods.find()
//     });
//     return multimodel;
//   },
//   setupController: function(controller, model) {
//     controller.set('contentA', model.tables);
//     controller.set('contentB', model.foods);
//   }
// });

Restaurant.Router.map(function() {
  this.resource('tables', {  path: '/' }, function() {
    this.resource('foods', { path: '/foods' });
  });
});

Restaurant.FoodsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('food');
  }
});

Restaurant.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Restaurant.OrdersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('order');
  }
});

Restaurant.TablesActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('table', function(table) {
      return !table.get('isOccupied');
    });
  },

});
