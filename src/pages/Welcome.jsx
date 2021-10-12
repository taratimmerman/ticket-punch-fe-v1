import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
  openWelcomeModalAction,
  closeWelcomeModalAction,
} from '../actions/modalActions';
// eslint-disable-next-line import/no-cycle
import { registerUserAction } from '../actions/userActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';

const Welcome = ({
  registerAction,
  openModalAction,
  closeModalAction,
  showModal,
  errorMessage,
}) => {
  useEffect(() => {
    openModalAction();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    <Modal
      className="purple"
      isOpen={showModal}
      onRequestClose={() => closeModalAction()}
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={200}
      contentLabel="modal"
    >
      <h1>Welcome to Ticket Punch</h1>
      <p>Let&apos;s get started</p>

      <ErrorMessage error={errorMessage} />

      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <label
          htmlFor="email"
        >
          Enter email
          <input
            type="email"
            {...register('email', RegistrationValidation.email)}
            name="email"
            className={`purple ${errors.email ? 'error' : null}`}
            placeholder="name@company.com"
          />
          {errors.email ? (
            <InlineErrorMessage inlineErrorMessage={errors.email.message} />
          ) : null}
        </label>

        <label
          htmlFor="password"
        >
          Enter password
          <input
            type="password"
            {...register('password', RegistrationValidation.password)}
            name="password"
            className={`purple ${errors.password ? 'error' : null}`}
            placeholder="Choose a password"
          />
          {errors.password ? (
            <InlineErrorMessage inlineErrorMessage={errors.password.message} />
          ) : null}
        </label>

        <button
          type="submit"
          className="purple extended"
          text="Create Account"
        >
          Create Account
        </button>
      </form>

      <p>
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    </Modal>
  );
};

Welcome.propTypes = {
  registerAction: PropTypes.func,
  openModalAction: PropTypes.func,
  closeModalAction: PropTypes.func,
  showModal: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  showModal: state.modalReducer.showWelcomeModal,
  errorMessage: state.registrationReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerAction: registerUserAction,
  openModalAction: openWelcomeModalAction,
  closeModalAction: closeWelcomeModalAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
