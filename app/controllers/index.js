import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.execute();
          let model = changeset.get('_content');
          alert(JSON.stringify(model.toJSON()));
        }
      });
    },

    validateField(changeset, field) {
      let hasChanges = changeset.get(`change.${field}`) ? true : false;
      if (hasChanges) {
        // only run validations if field has changes
        changeset.validate(field);
      }
    }
  }
});
