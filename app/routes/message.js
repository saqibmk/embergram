import Ember from 'ember';
const {
  get
} = Ember;
export default Ember.Route.extend({
  model(){
    let uid = get(this, 'session.uid');
    this.store.query('user', {orderBy: 'uid', equalTo: uid }).then((records) => {
      let user = records.get('firstObject');
      let email = user.get('email')
      return this.store.query('post', {orderBy: 'recipient', equalTo:email});
    });

  }
});
