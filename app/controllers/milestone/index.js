import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    saveMilestone(milestone){
      console.log(milestone);    
    },
    cancelMilestone(){
      this.set('isEditing', false);
    }
  }
});