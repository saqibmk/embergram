import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({
  actions:{
    login(){
      var controller = get(this, 'controller');
      var email = controller.get('userEmail');
      var password = controller.get('userPassword');
      get(this, 'session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data){

      }).catch(function(err){
        console.log(err)
      });
    }
  }
});
