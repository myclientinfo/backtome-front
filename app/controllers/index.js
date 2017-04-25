import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    createMilestone(milestone){
      console.log(milestone);
      let newMilestone = {

      };
      this.get('store').createRecord('milestone', milestone).save();
    },
    cancelMilestone(){
      this.set('isEditing', false);
    }
  }
});