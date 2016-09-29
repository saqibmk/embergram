import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },
  actions: {
    accessDenied() {
      return this.transitionTo('login');
    }
  }
});
