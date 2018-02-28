import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  creditReport: null,

  async model() {
    const store = get(this, 'store');
    let model = await store.createRecord('credit-report');
    set(this, 'creditReport', model);
    return model;
  },

  deactivate() {
    let model = get(this, 'creditReport');
    // `model()` creates an empty model and sets it to the changeset, this
    // creates an Ember Data model that'll be listed on the index route if the
    // user aborts adding a new one, so we call rollbackAttributes to cleanup
    // any unsaved models.
    // `creditReport` was never saved, cleanup empty model.
    model.unloadRecord();
  }
});
