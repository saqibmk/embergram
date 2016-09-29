import Ember from 'ember';

export default Ember.Route.extend({
  notifications: Ember.inject.service('notification-messages'),
  model(){
    return this.store.findAll('post');
  },
  actions: {
    accessDenied() {
      return this.transitionTo('login');
    }
  }
});
