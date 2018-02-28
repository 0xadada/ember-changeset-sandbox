import buildMessage from 'ember-changeset-validations/utils/validation-errors';
import withDefaults from 'ember-changeset-validations/utils/with-defaults';
import { validate } from 'ember-validators';

// TODO: write tests for this
export default function validateDate(options = {}) {
  options = withDefaults(options, {
    allowString: true,
    allowNone: false,
    allowBlank: false,
    errorFormat: 'MM/DD/YYYY'
  });

  return (key, value) => {
    let result = validate('date', value, options, null, key);

    return result === true ? true : buildMessage(key, result);
  };
}
