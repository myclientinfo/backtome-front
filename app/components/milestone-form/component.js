import Ember from 'ember';

export default Ember.Component.extend({
  milestone: {},
  isEditing: false,
  actions:{
    cancel(){
      //this.set('milestone', {});
      this.set('isEditing', false);
      console.log('this thing');
      this.attrs.cancelAction();
    },
    save(milestone){
      this.set('milestone', {});
      this.attrs.saveAction(milestone);
    }
  }
});
