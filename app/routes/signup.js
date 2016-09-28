import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signUp () {
        var controller = get(this, 'controller');
        var email = controller.get('email');
        var password = controller.get('password');
        var name = controller.get('name');
        var dob = controller.get('dob');
        var gender = controller.get('gender');
        const auth = get(this, 'firebaseApp').auth();
        auth.createUserWithEmailAndPassword(email, password)
            .then((createdUser) => {
              console.log(createdUser);
                var newUser = this.store.createRecord('user', {
                            uid: createdUser.uid,
                            email: email,
                            name: name,
                            dob: dob,
                            gender: gender
                          });
                newUser.save();
                controller.set('email', null);
                controller.set('password', null);
                controller.set('name', null);
                controller.set('dob', null);
                controller.set('gender', null);
                controller.transitionToRoute('feed');       
            }).catch((error) => {
              console.log(error);
            });
    }
  }
});
