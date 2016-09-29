import Ember from 'ember';
const {
  get,
  set
} = Ember;
export default Ember.Component.extend({
  actions: {
    send(){
      let sendTo = get(this, 'recipientEmail');
      let msgText= get(this, 'msg');
      this.sendAction('sendMsg', sendTo, msgText);
      set(this, 'recipientEmail', '');
      set(this, 'msg', '');
    }
  }
});
