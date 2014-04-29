Restaurant.Order = DS.Model.extend({
  table: DS.belongsTo('table'),
  foods: DS.hasMany('foods'),
  item: DS.attr('string'),
});
