import Ember from 'ember';

const {get} = Ember;

export default Ember.Controller.extend({
  actions: {
    logout() {
      get(this, 'session').close();
      this.transitionToRoute('login');
    },
    login() {
      this.transitionToRoute('login');
    }
  }
});
