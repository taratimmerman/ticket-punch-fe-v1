import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/no-cycle
import { loginUserAction } from '../actions/userActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';

function Login({
  loginAction,
  errorMessage,
}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
  });

  const handleLogin = (user) => {
    const email = user.email.trim();
    const password = user.password.trim();

    loginAction(email, password);
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const LoginValidation = {
    email: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Enter in the format: name@company.com',
      },
    },
    password: {
      required: 'Please enter your password',
    },
  };

  return (
    <section>
      <h1>Ticket Punch</h1>

      <ErrorMessage error={errorMessage} />

      <form onSubmit={handleSubmit(handleLogin, handleError)}>
        <label
          htmlFor="email"
        >
          Email
          <input
            type="email"
            {...register('email', LoginValidation.email)}
            name="email"
            className={`${errors.email ? 'error' : null}`}
            placeholder="name@company.com"
          />
          {errors.email
            ? <InlineErrorMessage inlineErrorMessage={errors.email.message} />
            : null}
        </label>
        <br />

        <label
          htmlFor="password"
        >
          Password
          <input
            type="password"
            {...register('password', LoginValidation.password)}
            name="password"
            className={`${errors.password ? 'error' : null}`}
            placeholder="Password"
          />
          {errors.password
            ? <InlineErrorMessage inlineErrorMessage={errors.password.message} />
            : null}
        </label>
        <br />

        <button
          type="submit"
        >
          Log In
        </button>
      </form>
      <div>
        Don&apos;t have an account yet?
        <Link to="/signup">Sign up</Link>
      </div>
    </section>
  );
}

Login.propTypes = {
  loginAction: PropTypes.func,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  errorMessage: state.loginReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginAction: loginUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
