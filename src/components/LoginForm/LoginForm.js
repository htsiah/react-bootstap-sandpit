import React from 'react';
import LoginFormValidation from './LoginFormValidation';
import LoginFormValidationRules from './LoginFormValidationRules';

// Initial Fields Value
const INITIAL_FIELDS_VALUES = {
  email: '',
  password: '',
};

export const LoginForm = (props) => {
  const { handleSubmit, handleChange, values, errors, isSubmitting } = LoginFormValidation(
    props,
    INITIAL_FIELDS_VALUES,
    LoginFormValidationRules
  );

  return (
    <>
      <h1></h1>
      <p>Type a valid email and a 6 character to login.</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">
            Email address
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              onChange={(e) => handleChange(e)}
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
