import TextField from '@ember/component/text-field';
import { notEmpty } from '@ember/object/computed';

export default TextField.extend({
  hasContent: notEmpty('value')
});
