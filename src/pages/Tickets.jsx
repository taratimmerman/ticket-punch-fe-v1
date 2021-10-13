import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  openAddTicketModalAction,
  closeAddTicketModalAction,
} from '../actions/modalActions';
import { getAllProjectsByUserAction } from '../actions/projectActions';
import {
  createTicketAction,
  getAllTicketsByUserAction,
  targetTicketAcion,
} from '../actions/ticketActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';
// eslint-disable-next-line import/no-cycle
import TicketCard from '../components/TicketCard';
import { getUserId } from '../helpers/getUserInfo';

const Tickets = ({
  getAllTickets,
  tickets,
  getAllProjects,
  projects,
  createTicket,
  openModal,
  closeModal,
  showModal,
  errorMessage,
  isEditing,
  isDeleting,
  targetTicket,
}) => {
  useEffect(() => {
    getAllTickets(getUserId());
    getAllProjects(getUserId());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const handleCreateTicket = (newTicket) => {
    const userId = getUserId();
    const title = newTicket.title.trim();
    const description = newTicket.description.trim();
    const { status } = newTicket;
    const { bug } = newTicket;
    const projectId = newTicket.projectTitle;

    createTicket(userId, title, description, status, bug, projectId);
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const newTicketValidation = {
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
    <section className="page">
      <header>
        <h1>Tickets</h1>
        <button
          type="button"
          onClick={() => openModal()}
          text="New Ticket"
          className="purple"
        >
          Create Ticket
        </button>
      </header>

      {/* New Ticket Modal */}
      <Modal
        className="green"
        isOpen={showModal}
        onRequestClose={() => closeModal()}
        closeTimeoutMS={200}
        contentLabel="modal"
        ariaHideApp={false}
      >
        <h4>Add Ticket</h4>

        <ErrorMessage error={errorMessage} />

        <form onSubmit={handleSubmit(handleCreateTicket, handleError)}>
          <label
            htmlFor="title"
          >
            Ticket Name
            <input
              type="text"
              {...register('title', newTicketValidation.title)}
              name="title"
              className={`${errors.title ? 'error' : null}`}
              placeholder="Enter the ticket title"
            />
            {errors.title ? (
              <InlineErrorMessage inlineErrorMessage={errors.title.message} />
            ) : null}
          </label>
          <br />

          <label
            htmlFor="description"
          >
            Ticket Description
            <textarea
              type="text"
              {...register('description', newTicketValidation.description)}
              name="description"
              placeholder="Enter the ticket description"
            />
            {errors.description ? (
              <InlineErrorMessage
                inlineErrorMessage={errors.description.message}
              />
            ) : null}
          </label>
          <br />

          <label
            htmlFor="projectTitle"
          >
            Project Title
            <select name="projectTitle" {...register('projectTitle')}>
              <option>---</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
          </label>
          <br />

          <label
            htmlFor="status"
          >
            Ticket Status
            <select name="status" {...register('status')}>
              <option>---</option>
              <option value="stuck">Stuck</option>
              <option value="working_on_it">Working on it</option>
              <option value="done">Done</option>
            </select>
          </label>
          <br />

          <label
            htmlFor="bug"
          >
            Is this a bug ticket?
            <select name="bug" {...register('bug')}>
              <option>---</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br />

          <button
            type="submit"
            className="green"
            text="Add Ticket"
          >
            Submit
          </button>
        </form>
        <button
          type="button"
          className="green secondary"
          onClick={() => closeModal()}
          text="Cancel"
        >
          Cancel
        </button>
      </Modal>

      <article>
        <article className="stuck">
          <h2>Stuck</h2>
          <section>
            {tickets
              .filter((ticket) => ticket.status === 'stuck')
              .map((ticket) => (
                <article
                  aria-hidden="true"
                  key={ticket.id}
                  onClick={() => (
                    isEditing || isDeleting
                      ? null
                      : targetTicket(
                        ticket.id,
                        ticket.title,
                        ticket.description,
                        ticket.status,
                        ticket.bug,
                        ticket.archived,
                        ticket.project_id,
                      ))}
                >
                  <TicketCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    description={ticket.description}
                    status={ticket.status}
                    bug={ticket.bug}
                    projectId={ticket.project_id}
                  />
                </article>
              ))}
          </section>
        </article>
        <article className="working-on-it">
          <h2>Working on it</h2>
          <section>
            {tickets
              .filter((ticket) => ticket.status === 'working_on_it')
              .map((ticket) => (
                <article
                  aria-hidden="true"
                  key={ticket.id}
                  onClick={() => (
                    isEditing || isDeleting
                      ? null
                      : targetTicket(
                        ticket.id,
                        ticket.title,
                        ticket.description,
                        ticket.status,
                        ticket.bug,
                        ticket.archived,
                        ticket.project_id,
                      ))}
                >
                  <TicketCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    description={ticket.description}
                    status={ticket.status}
                    bug={ticket.bug}
                    projectId={ticket.project_id}
                  />
                </article>
              ))}
          </section>
        </article>
        <article className="done">
          <h2>Done</h2>
          <section>
            {tickets
              .filter((ticket) => ticket.status === 'done')
              .map((ticket) => (
                <article
                  aria-hidden="true"
                  key={ticket.id}
                  onClick={() => (
                    isEditing || isDeleting
                      ? null
                      : targetTicket(
                        ticket.id,
                        ticket.title,
                        ticket.description,
                        ticket.status,
                        ticket.bug,
                        ticket.archived,
                        ticket.project_id,
                      ))}
                >
                  <TicketCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    description={ticket.description}
                    status={ticket.status}
                    bug={ticket.bug}
                    projectId={ticket.project_id}
                  />
                </article>
              ))}
          </section>
        </article>
      </article>
    </section>
  );
};

Tickets.propTypes = {
  getAllTickets: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.array,
  getAllProjects: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array,
  createTicket: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  showModal: PropTypes.bool,
  targetTicketAcion: PropTypes.func,
  errorMessage: PropTypes.string,
  isEditing: PropTypes.bool,
  isDeleting: PropTypes.bool,
  targetTicket: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tickets: state.ticketReducer.tickets,
  projects: state.projectReducer.projects,
  showModal: state.modalReducer.showAddTicketModal,
  errorMessage: state.ticketReducer.error,
  isEditing: state.modalReducer.showEditTicketModal,
  isDeleting: state.modalReducer.showDeleteTicketModal,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllTickets: getAllTicketsByUserAction,
  getAllProjects: getAllProjectsByUserAction,
  createTicket: createTicketAction,
  openModal: openAddTicketModalAction,
  closeModal: closeAddTicketModalAction,
  targetTicket: targetTicketAcion,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
