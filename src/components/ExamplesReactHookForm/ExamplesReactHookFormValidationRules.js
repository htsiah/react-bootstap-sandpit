/**
 * This is where you configure the validation rules
 */

export default function ExamplesReactHookFormValidationRules(values) {
  let errors = {};

  // Name field
  if (!values.name) {
    errors.name = 'Required Name';
  }

  // Email field
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password field
  if (!values.password) {
    errors.password = 'Required Passsword';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
}
