import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/no-cycle
import { registerUserAction } from '../actions/userActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';

function Welcome({ registerAction, errorMessage }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
  });

  const handleRegistration = (user) => {
    const email = user.email.trim();
    const password = user.password.trim();

    registerAction(email, password);
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const RegistrationValidation = {
    email: {
      required: 'Please enter a valid email address',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Enter in the format: name@company.com',
      },
    },
    password: {
      required: 'Please enter a password',
      minLength: {
        value: 6,
        message: 'Passwords must be six or more characters',
      },
    },
  };

  return (
    <section>
      <p>Sign up to track your project progress</p>

      <ErrorMessage error={errorMessage} />

      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <label
          htmlFor="email"
        >
          Email
          <input
            type="email"
            {...register('email', RegistrationValidation.email)}
            name="email"
            className={`${errors.email ? 'error' : null}`}
            placeholder="name@company.com"
          />
          {errors.email ? (
            <InlineErrorMessage inlineErrorMessage={errors.email.message} />
          ) : null}
        </label>
        <br />

        <label
          htmlFor="password"
        >
          Password
          <input
            type="password"
            {...register('password', RegistrationValidation.password)}
            name="password"
            className={`${errors.password ? 'error' : null}`}
            placeholder="Choose a password"
          />
          {errors.password ? (
            <InlineErrorMessage inlineErrorMessage={errors.password.message} />
          ) : null}
        </label>
        <br />

        <button
          type="submit"
        >
          Sign up
        </button>
      </form>

      <p>
        Have an account?
        <Link to="/">Log in</Link>
      </p>
    </section>
  );
}

Welcome.propTypes = {
  registerAction: PropTypes.func,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  errorMessage: state.registrationReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerAction: registerUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
