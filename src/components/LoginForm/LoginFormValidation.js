import React, { useContext } from 'react';

import { AuthContext } from '../shared/context/auth-context';

export default function LoginFormValidation(props, initialFormValues, LoginFormValidationRules) {
  const auth = useContext(AuthContext);
  const [values, setValues] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('Form Data: ', values);
        auth.login();
        setIsSubmitting(false);
        props.history.push('/home');
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value // use the bracket surrounding the event.target.name to dynamically change the property.
    });
  }

  function handleBlur() {
    setErrors(LoginFormValidationRules(values));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(LoginFormValidationRules(values));
    setIsSubmitting(true);
    // Move to call useEffect
    // If there is error, no submit.
  }

  return { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting };
}
