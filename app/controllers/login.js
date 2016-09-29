import Ember from 'ember';

const {get} = Ember;

export default Ember.Controller.extend({
  actions:{
    login(provider){
      if(provider === 'password'){
        let controller = this;
        var email = controller.get('userEmail');
        var password = controller.get('userPassword');
        get(this, 'session').open('firebase', {
          provider: provider,
          email: email,
          password: password
        }).then(function(){
          controller.set('userEmail', null);
          controller.set('userPassword', null);
          controller.transitionToRoute('feed');
        }).catch(function(err){
          console.log(err);
        });
      } else if (provider === 'twitter'){
        get(this, 'session').open('firebase', {
          provider: provider
        }).then((data)=>{
          var newUser = this.store.createRecord('user', {
                      uid: data.uid,
                      email: data.currentUser.email,
                      name: data.currentUser.displayName
                    });
          newUser.save().then(()=>{
            this.transitionToRoute('feed');
          });
        }).catch(function(err){
          console.log(err);
        });
      }

    }
  }
});
