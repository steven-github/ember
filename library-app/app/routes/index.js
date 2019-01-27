import Route from '@ember/routing/route';

export default Route.extend({
  //   model() {
  //     // we create a new record and that will be the model
  //     let model = this.store.createRecord('invitation');
  //     console.log('model:', model);
  //     return this.store.createRecord('invitation');
  //   },
  //   actions: {
  //     saveLibrary(newInvitation) {
  //       // console.log('newInvitation:', newInvitation);
  //       newInvitation.save().then(() => this.transitionTo(''));
  //     },
  //     // willTransition() is called when you leave a page(route).
  //     // We use this action to reset the model if we haven’t saved it in the database yet.
  //     willTransition() {
  //       // rollbackAttributes() removes the record from the store
  //       // if the model 'isNew'
  //       // let model = this.controller.get('model');
  //       // if (model.get('isNew')) {
  //       //   model.destroyRecord();
  //       // }
  //       this.controller.get('model').rollbackAttributes();
  //     }
  //   }
});
