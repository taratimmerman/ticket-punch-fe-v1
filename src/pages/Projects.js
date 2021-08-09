import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { GiBoxingGlove } from 'react-icons/gi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllProjectsByUserAction } from '../actions/projectActions';
import ProjectCard from '../components/ProjectCard';
import { userId } from '../helpers/getUserId';
import {
    ModalAction,
    ModalContainer,
    ModalCircle,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    PageContainer,
    Greeting,
    PageTitleWrapper,
    PageTitle,
    SolidButton,
    OutlineButton,
    KanbanContainer,
    Bar,
    StatusTitle,
    CardContainer,
    SolidInput,
    StyledForm,
    StyledLabel,
    SolidDropdown,
    SolidTextArea
} from '../styling/PageStyling';

const Projects = ({ getAllProjectsAction, projects }) => {

    const [newProjectisOpen, setNewProjectIsOpen] = useState(false);

    useEffect(() => {
        getAllProjectsAction(userId);
    }, []);

    const workingProjects = projects.filter(project => {
        return project.status === "working_on_it";
    });

    const doneProjects = projects.filter(project => {
        return project.status === "done";
    });

    return (
        <PageContainer className="page">
            <Greeting>Welcome to Ticket Punch</Greeting>
            <PageTitleWrapper>
                <PageTitle>Projects</PageTitle>
                <SolidButton className="purple restrict" onClick={() => setNewProjectIsOpen(true)}>New Project</SolidButton>
            </PageTitleWrapper>

            {/* New Project Modal */}
            <ModalContainer
                className="green"
                isOpen={newProjectisOpen}
                onRequestClose={() => setNewProjectIsOpen(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="green">
                    <GiBoxingGlove />
                </ModalCircle>
                <ModalAction>Add Project</ModalAction>
                <StyledForm>
                    <StyledLabel
                        htmlFor="project-name"
                    >Project Name</StyledLabel>

                    <SolidInput
                        type="text"
                        name="project-name"
                        placeholder="Project Name"
                    />

                    <StyledLabel
                        htmlFor="project-status"
                    >Project Status</StyledLabel>

                    <SolidDropdown name="project-status">
                        <option>---</option>
                        <option value="stuck">Stuck</option>
                        <option value="working-on-it">Working on it</option>
                        <option value="done">Done</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="project-description"
                    >Project Description</StyledLabel>

                    <SolidTextArea
                        type="text"
                        name="project-description"
                        placeholder="Project Description"
                    />

                    <ModalButtonContainer>
                        <OutlineButton
                            className="green restrict"
                            onClick={() => setNewProjectIsOpen(false)}
                        >Cancel</OutlineButton>

                        <SolidButton
                            type="submit"
                            className="green restrict"
                        >Add Project</SolidButton>
                    </ModalButtonContainer>
                </StyledForm>

            </ModalContainer>

            <KanbanContainer>
                <Bar className="working-on-it">
                    <StatusTitle>Working on it</StatusTitle>
                    <CardContainer>
                        {workingProjects.map(project => (
                            <ProjectCard key={project.id} title={project.title} description={project.description} status={project.status} />
                        ))}
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                    {doneProjects.map(project => (
                            <ProjectCard key={project.id} title={project.title} description={project.description} status={project.status} />
                        ))}
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

Projects.propTypes = {
    getAllProjectsAction: PropTypes.func,
    projects: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        projects: state.projectReducer.projects
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllProjectsAction: getAllProjectsByUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);