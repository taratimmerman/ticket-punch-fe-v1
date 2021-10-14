import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  openDeleteAccountModalAction,
  closeDeleteAccountModalAction,
  openEditAccountModalAction,
  closeEditAccountModalAction,
} from '../actions/modalActions';
// eslint-disable-next-line import/no-cycle
import {
  getUserByIdAction,
  deleteUserAction,
  updateUserAction,
} from '../actions/userActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';
// eslint-disable-next-line import/no-cycle
import DeleteModal from '../components/modals/DeleteModal';
import { getUserId, getUsername } from '../helpers/getUserInfo';

const Profile = ({
  getUserById,
  user,
  openDeleteAccountModal,
  showDeleteModal,
  updateUser,
  openEditAccountModal,
  closeEditAccountModal,
  showEditModal,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    getUserById(getUserId());
  }, []);

  const handleEditUser = (userEdits) => {
    const userId = getUserId();
    const email = userEdits.email.trim();
    const password = userEdits.password.trim();

    updateUser(userId, email, password);
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const editUserValidation = {
    email: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Enter in the format: name@company.com',
      },
    },
    password: {
      required: 'Please enter your password',
      minLength: {
        value: 6,
        message: 'Passwords must be six or more characters',
      },
    },
  };

  return (
    <section className="page">
      <header>
        <h1>Profile</h1>
      </header>
      <section>
        <h2>{getUsername()}</h2>
        <p>{user.email}</p>
      </section>
      <section>
        <button type="button" onClick={() => openDeleteAccountModal()}>
          Delete Account
        </button>

        {showDeleteModal ? <DeleteModal pageType="profile" /> : null}

        <button type="button" onClick={() => openEditAccountModal()}>
          Edit Account
        </button>

        {/* EDIT ACCOUNT MODAL */}
        <Modal
          className="purple"
          isOpen={showEditModal}
          onRequestClose={() => closeEditAccountModal()}
          closeTimeoutMS={200}
          contentLabel="modal"
          ariaHideApp={false}
        >
          <h4>
            Edit
            <span className="purple">{getUsername()}</span>
            Account
          </h4>

          <ErrorMessage error={errorMessage} />

          <form onSubmit={handleSubmit(handleEditUser, handleError)}>
            <label htmlFor="email">
              Edit Email
              <input
                type="text"
                {...register('email', editUserValidation.email)}
                name="email"
                className={`purple ${errors.email ? 'error' : null}`}
                placeholder={user.email}
              />
              {errors.email ? (
                <InlineErrorMessage inlineErrorMessage={errors.email.message} />
              ) : null}
            </label>
            <br />

            <label htmlFor="password">
              Edit Password
              <input
                type="password"
                {...register('password', editUserValidation.password)}
                name="password"
                className={`purple ${errors.password ? 'error' : null}`}
                placeholder="Enter current or new password"
              />
              {errors.password ? (
                <InlineErrorMessage inlineErrorMessage={errors.email.message} />
              ) : null}
            </label>
            <br />

            <p>These changes cannot be undone</p>
            <button className="purple" type="submit" text="Edit Account">
              Edit
            </button>
          </form>

          <button
            type="button"
            className="purple secondary"
            onClick={() => closeEditAccountModal()}
            text="Cancel"
          >
            Cancel
          </button>
        </Modal>
      </section>
    </section>
  );
};

Profile.propTypes = {
  getUserById: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
  updateUser: PropTypes.func,
  deleteUser: PropTypes.func,
  openDeleteAccountModal: PropTypes.func,
  closeDeleteAccountModal: PropTypes.func,
  showDeleteModal: PropTypes.bool,
  openEditAccountModal: PropTypes.func,
  closeEditAccountModal: PropTypes.func,
  showEditModal: PropTypes.bool,
  errorMessage: PropTypes.string,
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    showDeleteModal: state.modalReducer.showDeleteAccountModal,
    showEditModal: state.modalReducer.showEditAccountModal,
    errorMessage: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUserById: getUserByIdAction,
  updateUser: updateUserAction,
  openDeleteAccountModal: openDeleteAccountModalAction,
  closeDeleteAccountModal: closeDeleteAccountModalAction,
  openEditAccountModal: openEditAccountModalAction,
  closeEditAccountModal: closeEditAccountModalAction,
  deleteUser: deleteUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
