import Ember from 'ember';
import ToriiFirebaseAdapter from 'ember/torii-adapter/firebase';
export default ToriiFirebaseAdapter.extend({
  firebase: Ember.injet.service()
})
