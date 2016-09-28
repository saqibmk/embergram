import Ember from 'ember';

const {get} = Ember;

export default Ember.Controller.extend({
  actions:{
    login(){
      let controller = this;
      var email = controller.get('userEmail');
      var password = controller.get('userPassword');
      get(this, 'session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data){
        console.log(data);
        controller.set('userEmail', null);
        controller.set('userPassword', null);
        controller.transitionToRoute('feed');
      }).catch(function(err){
        console.log(err);
      });
    }
  }
});
