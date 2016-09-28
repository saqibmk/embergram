import DS from 'ember-data';

let {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  uid: attr('string'),
  email: attr('string'),
  name: attr('string'),
  dob: attr('date'),
  gender: attr('string'),
  posts: hasMany('post')
});
