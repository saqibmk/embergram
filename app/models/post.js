import DS from 'ember-data';
const {
  Model,
  attr,
  belongsTo
} = DS;
export default Model.extend({
  imageURL: attr('string'),
  caption: attr('string'),
  user: belongsTo('user')
});
