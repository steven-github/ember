import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('library');
  },

  actions: {
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        console.log('library', library);
        library.destroyRecord();
      }
    }
  }
});
