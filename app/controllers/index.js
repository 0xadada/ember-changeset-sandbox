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
    }
  }
});
