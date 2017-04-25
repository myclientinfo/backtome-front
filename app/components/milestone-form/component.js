import Ember from 'ember';

export default Ember.Component.extend({
  milestone: {},
  isEditing: false,
  actions:{
    cancel(){
      this.set('milestone', {});
      this.set('isEditing', false);
      this.attrs.cancelAction();
    },
    save(milestone){
      this.set('milestone', {});
      this.attrs.saveAction(milestone);
    }
  }
});
