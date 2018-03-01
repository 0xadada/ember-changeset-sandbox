import DS from 'ember-data';

const { Model, attr } = DS;

export default DS.Model.extend({
  day: attr('number'),
  month: attr('number'),
  year: attr('number')
});
