import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  openAddProjectModalAction,
  closeAddProjectModalAction,
} from '../actions/modalActions';
import {
  createProjectAction,
  getAllProjectsByUserAction,
  targetProjectAction,
} from '../actions/projectActions';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';
// eslint-disable-next-line import/no-cycle
import ProjectCard from '../components/ProjectCard';
import { getUserId } from '../helpers/getUserInfo';

const Projects = ({
  getAllProjects,
  projects,
  createProject,
  openModal,
  closeModal,
  showModal,
  targetProject,
  errorMessage,
  isEditing,
  isDeleting,
}) => {
  useEffect(() => {
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

  const handleCreateProject = (newProject) => {
    const userId = getUserId();
    const title = newProject.title.trim();
    const description = newProject.description.trim();
    const status = newProject.status.trim();

    createProject(userId, title, description, status);
    reset();
  };

  // eslint-disable-next-line no-console
  const handleError = (error) => console.log(error);

  const newProjectValidation = {
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
        message: 'Project descriptions must be less than 30 characters',
      },
    },
  };

  return (
    <section className="page">
      <header>
        <h1>Projects</h1>
        <button
          type="button"
          onClick={() => openModal()}
          text="New Project"
          className="purple"
        >
          New Project
        </button>
      </header>

      {/* New Project Modal */}
      <Modal
        className="green"
        isOpen={showModal}
        onRequestClose={() => closeModal()}
        closeTimeoutMS={200}
        contentLabel="modal"
      >
        <h4>Add Project</h4>

        <ErrorMessage error={errorMessage} />

        <form onSubmit={handleSubmit(handleCreateProject, handleError)}>
          <label
            htmlFor="title"
          >
            Project Title
            <input
              type="text"
              {...register('title', newProjectValidation.title)}
              name="title"
              className={`${errors.title ? 'error' : null}`}
              placeholder="Enter the project title"
            />
            {errors.title ? (
              <InlineErrorMessage inlineErrorMessage={errors.title.message} />
            ) : null}
          </label>
          <br />

          <label
            htmlFor="status"
          >
            Project Status
            <select name="status" {...register('status')}>
              <option>---</option>
              <option value="working_on_it">Working on it</option>
              <option value="done">Done</option>
            </select>
          </label>
          <br />

          <label
            htmlFor="description"
          >
            Project Description
            <textarea
              type="text"
              {...register('description', newProjectValidation.description)}
              name="description"
              placeholder="Enter the project description"
            />
            {errors.description ? (
              <InlineErrorMessage
                inlineErrorMessage={errors.description.message}
              />
            ) : null}
          </label>
          <br />

          <button type="submit" className="green" text="Add Project">
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
        <article className="working-on-it">
          <h2>Working on it</h2>
          <section>
            {projects
              .filter((project) => project.status === 'working_on_it')
              .map((project) => (
                <article
                  aria-hidden="true"
                  key={project.id}
                  onClick={() => (isEditing || isDeleting
                    ? null
                    : targetProject(
                      project.id,
                      project.title,
                      project.description,
                      project.status,
                    ))}
                >
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                  />
                </article>
              ))}
          </section>
        </article>
        <article className="done">
          <h2>Done</h2>
          <section>
            {projects
              .filter((project) => project.status === 'done')
              .map((project) => (
                <article
                  aria-hidden="true"
                  key={project.id}
                  onClick={() => (isEditing || isDeleting
                    ? null
                    : targetProject(
                      project.id,
                      project.title,
                      project.description,
                      project.status,
                    ))}
                >
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                  />
                </article>
              ))}
          </section>
        </article>
      </article>
    </section>
  );
};

Projects.propTypes = {
  getAllProjects: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array,
  createProject: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  showModal: PropTypes.bool,
  targetProject: PropTypes.func,
  errorMessage: PropTypes.string,
  isEditing: PropTypes.bool,
  isDeleting: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  showModal: state.modalReducer.showAddProjectModal,
  errorMessage: state.projectReducer.error,
  isEditing: state.modalReducer.showEditProjectModal,
  isDeleting: state.modalReducer.showDeleteProjectModal,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllProjects: getAllProjectsByUserAction,
  createProject: createProjectAction,
  openModal: openAddProjectModalAction,
  closeModal: closeAddProjectModalAction,
  targetProject: targetProjectAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
