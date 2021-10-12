import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { msgDevAction } from '../../actions/helpActions';
import { openHelpModalAction, closeHelpModalAction } from '../../actions/modalActions';
import ErrorMessage from '../errors/ErrorMessage';
import InlineErrorMessage from '../errors/InlineErrorMessage';
import SuccessMessage from '../SuccessMessage';

// eslint-disable-next-line no-shadow
const HelpModal = ({ closeHelpModal, showHelpModal, msgDev }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  let errorMessage;
  let successMessage;

  const handleMsgDev = (message) => {
    const name = message.name.trim();
    const email = message.email.trim();
    const question = message.question.trim();

    msgDev(name, email, question);
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const msgDevValidation = {
    name: {
      required: 'Please enter your name',
      maxLength: {
        value: 140,
        message: 'Please adjust your name to be less than 140 characters',
      },
      minLength: {
        value: 2,
        message: 'Name input must be at least 2 characters',
      },
    },
    email: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Enter in the format: name@company.com',
      },
    },
    question: {
      required: 'Please enter your question',
      maxLength: {
        value: 300,
        message: 'Please adjust your question to be less than 300 characters',
      },
    },
  };

  return (
    <Modal
      className="yellow"
      isOpen={showHelpModal}
      onRequestClose={() => closeHelpModal()}
      closeTimeoutMS={200}
      contentLabel="modal"
    >
      <h3>Questions?</h3>
      <p>Contact the dev!</p>

      <ErrorMessage error={errorMessage} />
      <SuccessMessage success={successMessage} />

      <form onSubmit={handleSubmit(handleMsgDev, handleError)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            {...register('name', msgDevValidation.name)}
            name="name"
            className={`yellow ${errors.name ? 'error' : null}`}
            placeholder="Enter your name"
          />
          {errors.name ? (
            <InlineErrorMessage inlineErrorMessage={errors.name.message} />
          ) : null}
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            {...register('email', msgDevValidation.email)}
            email="email"
            className={`yellow ${errors.email ? 'error' : null}`}
            placeholder="Enter your email"
          />
          {errors.email ? (
            <InlineErrorMessage inlineErrorMessage={errors.email.message} />
          ) : null}
        </label>
        <label htmlFor="question">
          Question/Message
          <textarea
            type="text"
            {...register('question', msgDevValidation.question)}
            name="question"
            className={`yellow ${errors.question ? 'error' : null}`}
            placeholder="Enter your question/message"
          />
          {errors.question ? (
            <InlineErrorMessage inlineErrorMessage={errors.question.message} />
          ) : null}
        </label>
        <button type="submit" className="yellow" text="Email Tara">
          Email Tara
        </button>
      </form>
      <button
        type="button"
        className="yellow secondary"
        onClick={() => closeHelpModal()}
        text="Cancel"
      >
        Cancel
      </button>
    </Modal>
  );
};

HelpModal.propTypes = {
  closeHelpModal: PropTypes.func,
  showHelpModal: PropTypes.bool,
  msgDev: PropTypes.func,
};

const mapStateToProps = (state) => ({
  showHelpModal: state.modalReducer.showHelpModal,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openHelpModal: openHelpModalAction,
    closeHelpModal: closeHelpModalAction,
    msgDev: msgDevAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
