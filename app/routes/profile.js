import Ember from 'ember';
const {
  get,
  set
} = Ember;
export default Ember.Route.extend({
  isEditing: true,
  model(){
    let uid = get(this, 'session.uid');
    return this.store.query('user', {orderBy: 'uid', equalTo: uid }).then((records) => {
      return records.get('firstObject');
    });
  },
  actions: {
    edit(){
      set(this, 'isEditing', true);
    }
  }
});
