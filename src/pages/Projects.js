import React from 'react';
import Card from '../components/Card';
import {
    PageContainer,
    Greeting,
    PageTitleWrapper,
    PageTitle,
    SolidButton,
    KanbanContainer,
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
                <SolidButton className="purple">New Project</SolidButton>
            </PageTitleWrapper>
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