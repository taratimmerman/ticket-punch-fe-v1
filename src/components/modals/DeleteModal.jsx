import React from 'react';

import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDeleteProjectModalAction, closeDeleteTicketModalAction, closeDeleteAccountModalAction } from '../../actions/modalActions';
import { deleteProjectAction } from '../../actions/projectActions';
import { deleteTicketAction } from '../../actions/ticketActions';
// eslint-disable-next-line import/no-cycle
import { deleteUserAction } from '../../actions/userActions';
import { getUserId, getUsername } from '../../helpers/getUserInfo';
import CapitalizeFirstLetter from '../../helpers/humanizeString';
import ErrorMessage from '../errors/ErrorMessage';

const DeleteModal = ({
  showDeleteProjectModal,
  showDeleteTicketModal,
  showDeleteAccountModal,
  projectTitle,
  ticketTitle,
  projectId,
  ticketId,
  projectErrorMessage,
  ticketErrorMessage,
  profileErrorMessage,
  pageType,
  closeDeleteProjectModal,
  closeDeleteTicketModal,
  closeDeleteAccountModal,
  deleteProject,
  deleteTicket,
  deleteUser,
}) => {
  const isDeleteModalOpen = (type) => {
    let showModalBool;
    switch (type) {
      case 'project':
        showModalBool = showDeleteProjectModal;
        break;
      case 'ticket':
        showModalBool = showDeleteTicketModal;
        break;
      case 'profile':
        showModalBool = showDeleteAccountModal;
        break;
      default:
        showModalBool = null;
    }
    return showModalBool;
  };

  const closeDeleteModal = (type) => {
    let closeThisModal;
    switch (type) {
      case 'project':
        closeThisModal = closeDeleteProjectModal();
        break;
      case 'ticket':
        closeThisModal = closeDeleteTicketModal();
        break;
      case 'profile':
        closeThisModal = closeDeleteAccountModal();
        break;
      default:
        closeThisModal = null;
    }
    return closeThisModal;
  };

  const determineItemTitle = (type) => {
    let title;
    switch (type) {
      case 'project':
        title = projectTitle;
        break;
      case 'ticket':
        title = ticketTitle;
        break;
      case 'profile':
        title = getUsername();
        break;
      default:
        title = '';
    }
    return title;
  };

  const determineItemId = (type) => {
    let id;
    switch (type) {
      case 'project':
        id = projectId;
        break;
      case 'ticket':
        id = ticketId;
        break;
      case 'profile':
        id = getUserId();
        break;
      default:
        id = 0;
    }
    return id;
  };

  const deleteItem = (type, id) => {
    let deleteAction;
    switch (type) {
      case 'project':
        deleteAction = deleteProject(id);
        break;
      case 'ticket':
        deleteAction = deleteTicket(id);
        break;
      case 'profile':
        deleteAction = deleteUser(id);
        break;
      default:
        deleteAction = null;
    }
    return deleteAction;
  };

  const determineError = (type) => {
    let errorMessage;
    switch (type) {
      case 'project':
        errorMessage = projectErrorMessage;
        break;
      case 'ticket':
        errorMessage = ticketErrorMessage;
        break;
      case 'profile':
        errorMessage = profileErrorMessage;
        break;
      default:
        errorMessage = '';
    }
    return errorMessage;
  };

  return (
    <Modal
      className="red"
      isOpen={isDeleteModalOpen(pageType)}
      onRequestClose={() => closeDeleteModal(pageType)}
      closeTimeoutMS={200}
      contentLabel="modal"
    >
      <h4>
        Delete
        <span className="red">{determineItemTitle(pageType)}</span>
        {CapitalizeFirstLetter(`${pageType}?`)}
      </h4>

      <ErrorMessage error={determineError(pageType)} />

      {pageType === 'project'
        ? <p>Related tickets will also be deleted</p>
        : null}

      {pageType === 'profile'
        ? (
          <>
            <p>You will permanently lose your:</p>
            <ul>
              <li>Profile</li>
              <li>Projects</li>
              <li>Tickets</li>
            </ul>
          </>
        )
        : null}
      <p>This action cannot be undone</p>
      <button
        type="button"
        className="red"
        onClick={() => deleteItem(pageType, determineItemId(pageType))}
        text="Delete Project"
      >
        Delete
      </button>
      <button
        type="button"
        className="red secondary"
        onClick={() => closeDeleteModal(pageType)}
        text="Cancel"
      >
        Cancel
      </button>
    </Modal>
  );
};

DeleteModal.propTypes = {
  projectTitle: PropTypes.string,
  projectId: PropTypes.number,
  showDeleteProjectModal: PropTypes.bool,
  projectErrorMessage: PropTypes.string,
  ticketTitle: PropTypes.string,
  ticketId: PropTypes.number,
  showDeleteTicketModal: PropTypes.bool,
  ticketErrorMessage: PropTypes.string,
  showDeleteAccountModal: PropTypes.bool,
  profileErrorMessage: PropTypes.string,
  pageType: PropTypes.string,
  closeDeleteProjectModal: PropTypes.func,
  closeDeleteTicketModal: PropTypes.func,
  closeDeleteAccountModal: PropTypes.func,
  deleteProject: PropTypes.func,
  deleteTicket: PropTypes.func,
  deleteUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    projectTitle: state.projectReducer.projectTitle,
    projectId: state.projectReducer.projectId,
    showDeleteProjectModal: state.modalReducer.showDeleteProjectModal,
    projectErrorMessage: state.projectReducer.error,
    ticketTitle: state.ticketReducer.ticketTitle,
    ticketId: state.ticketReducer.ticketId,
    showDeleteTicketModal: state.modalReducer.showDeleteTicketModal,
    ticketErrorMessage: state.ticketReducer.error,
    showDeleteAccountModal: state.modalReducer.showDeleteAccountModal,
    profileErrorMessage: state.userReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteProject: deleteProjectAction,
    closeDeleteProjectModal: closeDeleteProjectModalAction,
    deleteTicket: deleteTicketAction,
    closeDeleteTicketModal: closeDeleteTicketModalAction,
    deleteUser: deleteUserAction,
    closeDeleteAccountModal: closeDeleteAccountModalAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
