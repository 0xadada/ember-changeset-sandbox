import {
  validateLength,
  validateNumber,
  validatePresence
} from 'ember-changeset-validations/validators';

export default {
  day: validateNumber({
    allowBlank: false,
    integer: true,
    positive: true,
    gte: 1,
    lte: 31
  }),

  month: validateNumber({
    allowBlank: false,
    integer: true,
    positive: true,
    gte: 1,
    lte: 12
  }),

  year: [
    validateNumber({
      allowBlank: false,
      integer: true,
      positive: true
    }),
    validateLength({ is: 4 })
  ]
};
