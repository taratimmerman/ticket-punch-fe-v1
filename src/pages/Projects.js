import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import {
    PageContainer,
    Greeting,
    PageTitleWrapper,
    PageTitle,
    PurpleButtonPrimary,
    Bar,
    StatusTitle,
    CardContainer
} from './PageStyling';

const Projects = () => {
    return (
        <PageContainer>
            <Greeting>Welcome to Ticket Punch, Guest</Greeting>
            <PageTitleWrapper>
                <PageTitle>Your projects</PageTitle>
                <PurpleButtonPrimary>New project</PurpleButtonPrimary>
            </PageTitleWrapper>
            <ProjectsContainer>
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
            </ProjectsContainer>
        </PageContainer>
    );
};

export default Projects;

// STYLED COMPONENTS BELOW:

const ProjectsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;