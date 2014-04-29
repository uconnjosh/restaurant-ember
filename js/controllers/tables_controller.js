Restaurant.TablesController = Ember.ArrayController.extend({
  actions: {
    isOccupied: function() {
      var occupied = this.filterBy('isOccupied', true);
    },
    occupy: function(table) {
      var occupiedStatus = table.get('isOccupied')
      table.set('isOccupied', !occupiedStatus);
    }
  },
  remaining: function() {
    return this.filterProperty('isOccupied', false).get('length');
  }.property('@each.isOccupied'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'table' : 'tables';
  }.property('remaining')

});

