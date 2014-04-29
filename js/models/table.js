Restaurant.Table = DS.Model.extend({
  number: DS.attr('integer'),
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
