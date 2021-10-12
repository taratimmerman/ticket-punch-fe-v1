import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { ImBug } from 'react-icons/im';
import { VscHistory } from 'react-icons/vsc';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  openDeleteTicketModalAction,
  closeDeleteTicketModalAction,
  openEditTicketModalAction,
  closeEditTicketModalAction,
} from '../actions/modalActions';
import { getProjectByIdAction } from '../actions/projectActions';
import { deleteTicketAction, editTicketAction } from '../actions/ticketActions';
import { getUserId } from '../helpers/getUserInfo';
import CapitalizeFirstLetter from '../helpers/humanizeString';
import ErrorMessage from './errors/ErrorMessage';
import InlineErrorMessage from './errors/InlineErrorMessage';
// eslint-disable-next-line import/no-cycle
import DeleteModal from './modals/DeleteModal';

const TicketCard = ({
  ticketTitle,
  ticketDescription,
  ticketStatus,
  projectTitle,
  ticketBug,
  ticketArchived,
  ticketId,
  title,
  bug,
  archived,
  id,
  project,
  description,
  status,
  showDeleteModal,
  showEditModal,
  errorMessage,
  projects,
  openDeleteTicketModal,
  openEditTicketModal,
  closeEditTicketModal,
}) => {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: `${ticketTitle}`,
      description: `${ticketDescription}`,
      status: `${ticketStatus}`,
      projectTitle: `${projectTitle}`,
      bug: `${ticketBug}`,
      archived: `${ticketArchived}`,
    },
  });

  const handleEditTicket = (ticketEdits) => {
    const idEdits = ticketId;
    const userIdEdits = getUserId();
    const projectIdEdits = parseInt(ticketEdits.projectTitle, 10);
    const titleEdits = ticketEdits.title.trim();
    const descriptionEdits = ticketEdits.description.trim();
    const { statusEdits } = ticketEdits;
    const bugEdits = ticketEdits.bug === 'true';
    const archivedEdits = ticketEdits.status === 'archived';

    editTicketAction(
      idEdits,
      userIdEdits,
      projectIdEdits,
      titleEdits,
      descriptionEdits,
      statusEdits,
      bugEdits,
      archivedEdits,
    );
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const editTicketValidation = {
    title: {
      required: 'Please enter the ticket title',
      maxLength: {
        value: 30,
        message: 'Ticket titles must be less than 30 characters',
      },
    },
    description: {
      required: 'Please enter the ticket description',
      maxLength: {
        value: 140,
        message: 'Ticket descriptions must be less than 140 characters',
      },
    },
  };

  return (
    <section>
      <section
        aria-hidden="true"
      >
        <h4>{title}</h4>
        {bug ? <ImBug /> : null}
        {archived ? <VscHistory /> : null}
      </section>
      <section>
        <div>
          <div>
            <p>Ticket ID</p>
            <p>{id}</p>
            <p>Project Title</p>
            <p>{project.title}</p>
            <p>Ticket Description</p>
            <p>{description}</p>
            <p>Ticket Status</p>
            <p>{CapitalizeFirstLetter(status)}</p>
          </div>
          <div>

            {archived ? null
              : (
                <>
                  <button
                    aria-hidden="true"
                    type="button"
                    className="gray condensed"
                    onClick={() => openDeleteTicketModal()}
                  >
                    Delete
                  </button>
                  <button
                    aria-hidden="true"
                    type="button"
                    className="gray condensed"
                    onClick={() => openEditTicketModal()}
                  >
                    Edit
                  </button>
                </>
              )}

          </div>

        </div>

      </section>

      {/* DELETE TICKET MODAL */}
      {showDeleteModal ? <DeleteModal pageType="ticket" /> : null}

      {/* EDIT TICKET MODAL */}
      <Modal
        className="purple"
        isOpen={showEditModal}
        onRequestClose={() => closeEditTicketModal()}
        closeTimeoutMS={200}
        contentLabel="modal"
      >
        <h4>
          Edit
          {' '}
          <span className="purple">{`${ticketTitle}`}</span>
          {' '}
          Ticket
        </h4>

        <ErrorMessage error={errorMessage} />

        <form onSubmit={handleSubmit(handleEditTicket, handleError)}>
          <label
            htmlFor="title"
          >
            Ticket Name
            <input
              type="text"
              {...register('title', editTicketValidation.title)}
              name="title"
              placeholder={`${ticketTitle}`}
            />
            {errors.title
              ? <InlineErrorMessage inlineErrorMessage={errors.title.message} />
              : null}
          </label>
          <br />

          <label
            htmlFor="description"
          >
            Ticket Description
            <textarea
              type="text"
              {...register('description', editTicketValidation.description)}
              name="description"
              placeholder={`${ticketDescription}`}
            />
            {errors.description
              ? <InlineErrorMessage inlineErrorMessage={errors.description.message} />
              : null}
          </label>
          <br />

          <label
            htmlFor="projectTitle"
          >
            Project Title
            <select
              name="projectTitle"
              {...register('projectTitle')}
            >
              <option disabled defaultValue>{projectTitle}</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </label>
          <br />

          <label
            htmlFor="status"
          >
            Ticket Status
            <select
              name="status"
              {...register('status')}
            >
              <option disabled defaultValue>{ticketStatus}</option>
              <option value="stuck">Stuck</option>
              <option value="working_on_it">Working on it</option>
              <option value="done">Done</option>
              <option value="archived">Archive</option>
            </select>
          </label>
          <br />

          <label
            htmlFor="bug"
          >
            Is this a bug ticket?
            <select
              name="bug"
              {...register('bug')}
            >
              <option disabled defaultValue>{ticketBug}</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br />

          <p>These changes cannot be undone</p>

          <button
            type="submit"
            className="purple"
          >
            Edit
          </button>
        </form>
        <button
          type="button"
          className="purple secondary"
          onClick={() => closeEditTicketModal()}
        >
          Cancel
        </button>
      </Modal>
    </section>
  );
};

TicketCard.propTypes = {
  title: PropTypes.string,
  bug: PropTypes.bool,
  archived: PropTypes.bool,
  description: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
  ticketId: PropTypes.number,
  ticketTitle: PropTypes.string,
  ticketDescription: PropTypes.string,
  ticketStatus: PropTypes.string,
  projectTitle: PropTypes.number,
  ticketBug: PropTypes.bool,
  ticketArchived: PropTypes.bool,
  getProjectById: PropTypes.func,
  projectId: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  ticket: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array,
  deleteTicket: PropTypes.func,
  openDeleteTicketModal: PropTypes.func,
  closeDeleteTicketModal: PropTypes.func,
  showDeleteModal: PropTypes.bool,
  editTicket: PropTypes.func,
  openEditTicketModal: PropTypes.func,
  closeEditTicketModal: PropTypes.func,
  showEditModal: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  project: state.projectReducer.project,
  projects: state.projectReducer.projects,
  ticketId: state.ticketReducer.ticketId,
  ticketTitle: state.ticketReducer.ticketTitle,
  ticketDescription: state.ticketReducer.ticketDescription,
  ticketStatus: state.ticketReducer.ticketStatus,
  projectTitle: state.ticketReducer.projectTitle,
  ticketBug: state.ticketReducer.ticketBug,
  ticketArchived: state.ticketReducer.ticketArchived,
  showDeleteModal: state.modalReducer.showDeleteTicketModal,
  showEditModal: state.modalReducer.showEditTicketModal,
  errorMessage: state.ticketReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectById: getProjectByIdAction,
  deleteTicket: deleteTicketAction,
  openDeleteTicketModal: openDeleteTicketModalAction,
  closeDeleteTicketModal: closeDeleteTicketModalAction,
  editTicket: editTicketAction,
  openEditTicketModal: openEditTicketModalAction,
  closeEditTicketModal: closeEditTicketModalAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);
