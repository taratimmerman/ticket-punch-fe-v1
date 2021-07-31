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
                    <ProjectCard archived={true} title={"Graduate from Lambda"} description={"Recently graduated with 960 certified hours, from a full-time, intensive, mastery-based Software Development and Computer Science bootcamp."} status={"Archived"} />
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
