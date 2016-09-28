import DS from 'ember-data';

let {
  Model,
  attr
} = DS;

export default Model.extend({
  uid: attr('string'),
  username: attr('strig'),
  name: attr('string'),
  dob: attr('date'),
  gender: attr('string')
});
