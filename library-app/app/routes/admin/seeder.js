// For downloading multiple models in the same route we have to use the Ember.RSVP.hash() function in the model hook.
// RSVP.hash wraps multiple promises and returns a nicely structured hashed object.
// Ember.RSVP.hash tries to download all three requested models, and only returns with a fulfilled state if all are retrieved successfully.
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);

    this._super(controller, model);
  }
  //   init() {
  //     debugger;
  //   },

  //   beforeModel(transition) {
  //     debugger;
  //   },

  //   model(params, transition) {
  //     debugger;
  //   },

  //   afterModel(model, transition) {
  //     debugger;
  //   },

  //   activate() {
  //     debugger;
  //   },

  //   setupController(controller, model) {
  //     debugger;
  //   },

  //   renderTemplate(controller, model) {
  //     debugger;
  //   },
});
