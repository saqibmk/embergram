import DS from 'ember-data';
const {
  Model,
  attr
} = DS;

export default Model.extend({
  authorName:attr('string'),
  message:attr('string'),
  recipient:attr('string')
});
