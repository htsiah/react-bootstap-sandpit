import React from 'react';

const ExamplesReactHookFormValidation = (initialFormValues, ExamplesReactHookFormValidationRules) => {
  const [values, setValues] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        alert(JSON.stringify({ values }));
        console.log('Form Data: ', values.name, values.email, values.password);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value, // use the bracket surrounding the event.target.name to dynamically change the property.
    });
  }

  function handleBlur() {
    setErrors(ExamplesReactHookFormValidationRules(values));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(ExamplesReactHookFormValidationRules(values));
    setIsSubmitting(true);
    // Move to call useEffect
    // If there is error, no submit.
  }

  return { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting };
};

export default ExamplesReactHookFormValidation;
