import Ember from 'ember';

const {get} = Ember;

export default Ember.Route.extend({
  beforeModel(){
        return get(this,'session').fetch().catch(function(){});
    },
});
