import React from 'react';
import Card from '../components/Card';
import {
    PageContainer,
    PageTitleWrapper,
    PageTitle,
    KanbanContainer,
    Bar,
    StatusTitle,
    CardContainer
} from './PageStyling';

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
                    <Card archived={true} cardTitle={"Graduate from Lambda"} />
                    </CardContainer>
                </Bar>
                <Bar className="archive">
                    <StatusTitle>Archived Tickets</StatusTitle>
                    <CardContainer>
                    <Card archived={true} cardTitle={"Plan out app idea"} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default History;
