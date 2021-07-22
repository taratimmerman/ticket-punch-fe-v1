import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TicketCard from '../components/TicketCard';
import {
    PageContainer,
    PageTitleWrapper,
    PageTitle,
    KanbanContainer,
    Bar,
    StatusTitle,
    CardContainer
} from '../styling/PageStyling';

const History = () => {
    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>History</PageTitle>
            </PageTitleWrapper>
            <KanbanContainer>
                <Bar className="archive">
                    <StatusTitle>Archived Projects</StatusTitle>
                    <CardContainer>
                    <ProjectCard archived={true} title={"Graduate from Lambda"} description={"The look in your eyes, I recognize it. You used to have it for me. I can't. As much as I care about you, my first duty is to the ship."} status={"Archived"} />
                    </CardContainer>
                </Bar>
                <Bar className="archive">
                    <StatusTitle>Archived Tickets</StatusTitle>
                    <CardContainer>
                    <TicketCard archived={true} title={"Plan out app idea"} project={"Ticket Punch"} description={"Mr. Worf, you do remember how to fire phasers? Well, that's certainly good to know."} status={"Archived"} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default History;
