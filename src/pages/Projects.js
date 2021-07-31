import React, { useState } from 'react';

import { GiBoxingGlove } from 'react-icons/gi';

import ProjectCard from '../components/ProjectCard';
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

const Projects = () => {

    const [newProjectisOpen, setNewProjectIsOpen] = useState(false);

    return (
        <PageContainer className="page">
            <Greeting>Welcome to Ticket Punch</Greeting>
            <PageTitleWrapper>
                <PageTitle>Projects</PageTitle>
                <SolidButton className="purple restrict" onClick={() => setNewProjectIsOpen(true)}>New Project</SolidButton>
            </PageTitleWrapper>

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
                        <ProjectCard title={"Ticket Punch"} description={"A project management web app created to empower users to single-task or multi-task at their discretion. A simplified Monday.com if you will."} status={"Working on it"} />
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                        <ProjectCard title={"Family Promise"} description={"Family Promise helps local communities coordinate their compassion to address the root causes of family homelessness. They tap existing local resources to empower families towards economic stability."} status={"Done"} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default Projects;