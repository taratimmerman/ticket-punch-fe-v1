import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { VscHistory } from 'react-icons/vsc';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  openDeleteProjectModalAction,
  closeDeleteProjectModalAction,
  openEditProjectModalAction,
  closeEditProjectModalAction,
} from '../actions/modalActions';
import {
  deleteProjectAction,
  editProjectAction,
} from '../actions/projectActions';
import { getUserId } from '../helpers/getUserInfo';
import CapitalizeFirstLetter from '../helpers/humanizeString';
import ErrorMessage from './errors/ErrorMessage';
import InlineErrorMessage from './errors/InlineErrorMessage';
// eslint-disable-next-line import/no-cycle
import DeleteModal from './modals/DeleteModal';

const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectStatus,
  projectId,
  title,
  archived,
  id,
  description,
  status,
  showDeleteModal,
  showEditModal,
  errorMessage,
  openDeleteProjectModal,
  openEditProjectModal,
  closeEditProjectModal,
  editProject,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: `${projectTitle}`,
      description: `${projectDescription}`,
      status: `${projectStatus}`,
    },
  });

  const handleEditProject = (projectEdits) => {
    const idEdit = projectId;
    const userIdEdit = getUserId();
    const titleEdit = projectEdits.title.trim();
    const descriptionEdit = projectEdits.description.trim();
    const { statusEdit } = projectEdits;
    const archivedEdit = projectEdits.status === 'archived';

    editProject(
      idEdit,
      userIdEdit,
      titleEdit,
      descriptionEdit,
      statusEdit,
      archivedEdit,
    );
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const editProjectValidation = {
    title: {
      required: 'Please enter the project title',
      maxLength: {
        value: 30,
        message: 'Project titles must be less than 30 characters',
      },
    },
    description: {
      required: 'Please enter the project description',
      maxLength: {
        value: 140,
        message: 'Project descriptions must be less than 140 characters',
      },
    },
  };

  return (
    <article>
      <section aria-hidden="true">
        <h4>{title}</h4>
        {archived ? <VscHistory /> : null}
      </section>
      <section>
        <div>
          <div>
            <p>Project ID</p>
            <p>{id}</p>
            <p>Project Description</p>
            <p>{description}</p>
            <p>Project Status</p>
            <p>{CapitalizeFirstLetter(status)}</p>
          </div>
          <div>
            {archived ? null : (
              <div>
                <button
                  type="button"
                  className="gray condensed"
                  onClick={() => openDeleteProjectModal()}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="gray condensed"
                  onClick={() => openEditProjectModal()}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {showDeleteModal ? <DeleteModal pageType="project" /> : null}

      {/* EDIT PROJECT MODAL */}
      <Modal
        className="purple"
        isOpen={showEditModal}
        onRequestClose={() => closeEditProjectModal()}
        closeTimeoutMS={200}
        contentLabel="modal"
        ariaHideApp={false}
      >
        <h3>
          Edit
          <span className="purple">{`${projectTitle}`}</span>
          Project
        </h3>

        <ErrorMessage error={errorMessage} />

        <form onSubmit={handleSubmit(handleEditProject, handleError)}>
          <label htmlFor="title">
            Project Title
            <input
              type="text"
              {...register('title', editProjectValidation.title)}
              name="title"
              placeholder={`${projectTitle}`}
            />
            {errors.title ? (
              <InlineErrorMessage inlineErrorMessage={errors.title.message} />
            ) : null}
          </label>
          <br />

          <label htmlFor="description">
            Project Description
            <textarea
              type="text"
              {...register('description', editProjectValidation.description)}
              name="description"
              placeholder={`${projectDescription}`}
            />
            {errors.description ? (
              <InlineErrorMessage
                inlineErrorMessage={errors.description.message}
              />
            ) : null}
          </label>
          <br />

          <label htmlFor="status">
            Project Status
            <select name="status" {...register('status')}>
              <option>---</option>
              <option value="working_on_it">Working on it</option>
              <option value="done">Done</option>
              <option value="archived">Archived</option>
            </select>
          </label>
          <br />

          <p>These changes cannot be undone</p>

          <button type="submit" className="purple">
            Edit
          </button>
        </form>
        <button
          type="button"
          className="purple secondary"
          onClick={() => closeEditProjectModal()}
        >
          Cancel
        </button>
      </Modal>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  bug: PropTypes.bool,
  archived: PropTypes.bool,
  description: PropTypes.string,
  project: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
  projectId: PropTypes.number,
  projectTitle: PropTypes.string,
  projectDescription: PropTypes.string,
  projectStatus: PropTypes.string,
  deleteProject: PropTypes.func,
  openDeleteProjectModal: PropTypes.func,
  closeDeleteProjectModal: PropTypes.func,
  showDeleteModal: PropTypes.bool,
  editProject: PropTypes.func,
  openEditProjectModal: PropTypes.func,
  closeEditProjectModal: PropTypes.func,
  showEditModal: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  projectId: state.projectReducer.projectId,
  projectTitle: state.projectReducer.projectTitle,
  projectDescription: state.projectReducer.projectDescription,
  projectStatus: state.projectReducer.projectStatus,
  showDeleteModal: state.modalReducer.showDeleteProjectModal,
  showEditModal: state.modalReducer.showEditProjectModal,
  errorMessage: state.projectReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteProject: deleteProjectAction,
  openDeleteProjectModal: openDeleteProjectModalAction,
  closeDeleteProjectModal: closeDeleteProjectModalAction,
  editProject: editProjectAction,
  openEditProjectModal: openEditProjectModalAction,
  closeEditProjectModal: closeEditProjectModalAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
