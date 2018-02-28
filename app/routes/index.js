import Route from '@ember/routing/route';
import EmberObject, { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import CreditProfileValidations from 'sandbox/validations/credit-report';

export default Route.extend({
  changeset: null,
  creditReport: null,

  async model() {
    const store = get(this, 'store');
    let model = await store.createRecord('credit-report');
    set(this, 'creditReport', model);
    let validatorFn = lookupValidator(CreditProfileValidations);
    let changeset = new Changeset(
      model,
      validatorFn,
      CreditProfileValidations,
      { skipValidate: true }
    );
    set(this, 'changeset', changeset);
    return EmberObject.create({
      model,
      changeset
    });
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
