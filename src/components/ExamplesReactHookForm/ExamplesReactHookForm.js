import React from 'react';
import ExamplesReactHookFormValidation from './ExamplesReactHookFormValidation';
import ExamplesReactHookFormValidationRules from './ExamplesReactHookFormValidationRules';

/**
 * Learn how to do form validation using hook.
 * Original author -> https://www.youtube.com/watch?v=8yo44xN7-nQ
 */

// Initial Fields Value
const INITIAL_FIELDS_VALUES = {
  email: '',
  password: '',
  name: '',
};

const ExamplesReactHookForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = ExamplesReactHookFormValidation(
    INITIAL_FIELDS_VALUES,
    ExamplesReactHookFormValidationRules
  );

  return (
    <>
      <h1>React Hook Form</h1>
      <p>
        There are several ways that we could implement field validation. For example, bring in a third-party library such as Formik. This is
        an acceptable approach, and the only question is, do we need to bring in a third-party library to do the validation? Is it necessary
        to add that additional weight to our project?
      </p>
      <p>
        This example shows you the easy way the react hooks to do form validation without bringing in the third-party library. It doesn't
        change your form components, and you can reuse across your react projects.
      </p>
      <p>Here is the files structure:</p>
      <ul>
        <li>ExamplesReactHookForm.js: Form and fields decoration</li>
        <li>
          ExamplesReactHookFormValidation.js: Form validation on handling field input (handleChange), validating when mouse cursor out from
          the field (handleBlur), validating on form submit (handleSubmit), and submit the form when there is no error.
        </li>
        <li>ExamplesReactHookFormValidationRules.js: Here you write the fields validation rules.</li>
      </ul>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={errors.name ? 'form-control is-invalid' : 'form-control'}
              id="name"
              name="name"
              placeholder="Enter name"
            ></input>
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">
            Email address
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              onChange={(e) => handleChange(e)}
              onBlur={handleBlur}
              value={values.Email}
              className={errors.email ? 'form-control is-invalid' : 'form-control'}
              id="email"
              name="email"
              placeholder="Enter email"
            ></input>
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Password" className="col-sm-2 col-form-label col-form-label-sm">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onChange={(e) => handleChange(e)}
              onBlur={handleBlur}
              value={values.Password}
              className={errors.password ? 'form-control is-invalid' : 'form-control'}
              id="password"
              name="password"
              placeholder="Enter password"
            ></input>
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExamplesReactHookForm;
