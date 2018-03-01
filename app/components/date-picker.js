import Component from '@ember/component';
import EmberObject, { get, set, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import DateValidations from 'sandbox/validations/date';

export default Component.extend({
  store: service(),

  _changeset: null,
  changeset: null,
  model: null,
  onValidate: null,

  formattedDate: computed('model.{day,month,year}', function() {
    let model = get(this, 'model');
    let month = get(model, 'month') || 'MM';
    let day = get(model, 'day');
    let year = get(model, 'year');
    if (month && day && year) {
      // only return formatted form when all values are not undefined
      return `${month}/${day}/${year}`;
    } else {
      return '';
    }
  }),

  init() {
    this._super(...arguments);

    const store = get(this, 'store');
    let model = store.createRecord('date');

    let validatorFn = lookupValidator(DateValidations);
    let changeset = new Changeset(
      model,
      validatorFn,
      DateValidations,
      { skipValidate: true }
    );

    set(this, '_changeset', changeset);
    set(this, 'model', model);
  },

  actions: {
    validate(changeset, field) {
      let hasChanges = changeset.get(`change.${field}`) ? true : false;
      changeset.validate(field).then(() => {
        if (changeset.get('isValid')) {
          changeset.execute();
          // now update the parent changesets dob value
          let dob = get(this, 'formattedDate');
          set(this, 'dob', dob);
          // now fire any parent changeset validations
          let onValidate = get(this, 'onValidate');
          let pChangeset = get(this, 'changeset');
          if (typeof onValidate === 'function') onValidate(pChangeset, 'dob');
        }
      });
    }
  }
});
