import React, { useState } from 'react';
import Card from '../components/Card';
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
import {
    ModalContainer,
    ModalCircle,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    CTA,
} from '../styling/WelcomeStyling';
import { GiBoxingGlove } from 'react-icons/gi';

const Projects = () => {

    const [newProjectisOpen, setNewProjectIsOpen] = useState(false);

    return (
        <PageContainer className="page">
            <Greeting>Welcome to Ticket Punch, Guest</Greeting>
            <PageTitleWrapper>
                <PageTitle>Projects</PageTitle>
                <SolidButton className="purple" onClick={() => setNewProjectIsOpen(true)}>New Project</SolidButton>
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
                <CTA>Add Project</CTA>
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
                </StyledForm>
                <ModalButtonContainer>
                    <OutlineButton
                        className="green"
                        onClick={() => setNewProjectIsOpen(false)}
                    >Cancel</OutlineButton>

                    <SolidButton
                        type="submit"
                        className="green"
                    >Add Project</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

            <KanbanContainer>
                <Bar className="working-on-it">
                    <StatusTitle>Working on it</StatusTitle>
                    <CardContainer>
                        <Card cardTitle={"Ticket Punch"} />
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                        <Card cardTitle={"Family Promise"} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default Projects;