import Ember from 'ember';

export default Ember.Component.extend({
  type: 'mailgun',
  types: ['mailgun', 'mandrill', 'campaign monitor'],
  actions: {
    changeType(type){
      this.set('type', type);
    }
  }
});
