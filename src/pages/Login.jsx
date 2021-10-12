import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { openLoginModalAction } from '../actions/modalActions';
// eslint-disable-next-line import/no-cycle
import { loginUserAction } from '../actions/userActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';

function Login({
  loginAction,
  errorMessage,
  openLoginAction,
  showModal,
}) {
  useEffect(() => {
    openLoginAction();
  }, []);

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
    <Modal
      className="purple"
      isOpen={showModal}
      onRequestClose={openLoginAction()}
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={200}
      contentLabel="modal"
    >
      <h1>Log in to your Ticket Punch account</h1>

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
            className={`purple ${errors.email ? 'error' : null}`}
            placeholder="name@company.com"
          />
          {errors.email
            ? <InlineErrorMessage inlineErrorMessage={errors.email.message} />
            : null}
        </label>

        <label
          htmlFor="password"
        >
          Password
          <input
            type="password"
            {...register('password', LoginValidation.password)}
            name="password"
            className={`purple ${errors.password ? 'error' : null}`}
            placeholder="Choose a password"
          />
          {errors.password
            ? <InlineErrorMessage inlineErrorMessage={errors.password.message} />
            : null}
        </label>

        <button
          type="submit"
          className="purple extended"
          text="Sign In"
        >
          Submit
        </button>
      </form>
      <div>
        Don&apos;t have an account yet?
        <Link to="/">Sign up</Link>
      </div>
    </Modal>
  );
}

Login.propTypes = {
  loginAction: PropTypes.func,
  errorMessage: PropTypes.string,
  openLoginAction: PropTypes.func,
  showModal: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errorMessage: state.loginReducer.error,
  showModal: state.modalReducer.showUserLoginModal,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginAction: loginUserAction,
  openLoginAction: openLoginModalAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
