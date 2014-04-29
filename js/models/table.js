Restaurant.Table = DS.Model.extend({
  order: DS.hasMany('order'),
  number: DS.attr('number'),
  isOccupied: DS.attr('boolean')
});

Restaurant.Table.FIXTURES = [
  {
    id: 1,
    number: 1,
    isOccupied: true
  },
  {
    id: 2,
    number: 2,
    isOccupied: false
  }
];
