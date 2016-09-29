import Ember from 'ember';
const {
  get
} = Ember;
export default Ember.Route.extend({
  model(){
    let uid = get(this, 'session.uid');
    return this.store.query('user', {orderBy: 'uid', equalTo: uid }).then((records) => {
      let user = records.get('firstObject');
      let email = user.get('email');
      return this.store.query('message', {orderBy: 'recipient', equalTo:email});
    });

  },
  actions: {
    createMsg(to, body){

      let uid = get(this, 'session.uid');
      this.store.query('user', {orderBy: 'uid', equalTo: uid }).then((records) => {
        let user = records.get('firstObject');
        let name = user.get('name');

        let message = this.store.createRecord('message', {
          authorName:name,
          message:body,
          recipient:to
        });

        message.save().then(()=> {
          alert('Message Sent');
        });

      });
    },
    accessDenied() {
      return this.transitionTo('login');
    }
  }
});
