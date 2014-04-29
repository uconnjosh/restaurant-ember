Restaurant.Food = DS.Model.extend({
  order: DS.belongsTo('order'),
  name: DS.attr('string'),
  recipe: DS.attr('text'),
  price: DS.attr('number'),
  isOrdered: DS.attr('boolean')
});

Restaurant.Food.FIXTURES = [
 {
  id: 1,
  name: "French Fries",
  recipe:"1. Cut up potatoes. 2. Deep fry the slices. 3. Enjoy",
  price: 1,
  isOrdered: false
 }
];
