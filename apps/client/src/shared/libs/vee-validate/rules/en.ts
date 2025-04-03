export default {
  invalidTypeReceivedUndefined: '{validation} is a required field',
  invalidString: {
    email: '{validation} must be a valid',
    url: '{validation} must be a valid',
  },
  invalidType: 'Invalid data type',
  tooSmall: {
    string: {
      exact: '{validation} must be at least {minimum} characters',
      inclusive: '{path} must be at least {minimum} characters',
    },
    array: {
      exact: '{path} must be at least {minimum} characters',
      inclusive: '{validation} must be at least {minimum} characters',
    },
  },
  tooBig: {
    string: {
      exact: '{path} must be at most {maximum} characters',
      inclusive: '{path} must be at most {maximum} characters',
    },
  },
}
