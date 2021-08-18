import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllProjectsByUserAction } from '../actions/projectActions';
import { getAllTicketsByUserAction } from '../actions/ticketActions';
import ProjectCard from '../components/ProjectCard';
import TicketCard from '../components/TicketCard';
import{ getUserId } from '../helpers/getUserInfo';
import {
    PageContainer,
    PageTitleWrapper,
    PageTitle,
    KanbanContainer,
    Bar,
    StatusTitle,
    CardContainer
} from '../styling/PageStyling';

const History = ({ getAllProjectsAction, projects, getAllTicketsAction, tickets}) => {

    useEffect(() => {
        getAllProjectsAction(getUserId());
        getAllTicketsAction(getUserId());
    }, []);

    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>History</PageTitle>
            </PageTitleWrapper>
            <KanbanContainer>
                
                <Bar className="archive">
                    <StatusTitle>Archived Projects</StatusTitle>
                    <CardContainer>
                        {projects.filter(project => (
                            project.status === "archived"
                        )).map(project => (
                            <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} status={project.status} archived={project.archived}/>
                        ))}
                    </CardContainer>
                </Bar>

                <Bar className="archive">
                    <StatusTitle>Archived Tickets</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "archived"
                        )).map(ticket => (
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} bug={ticket.bug} archived={ticket.archived} projectId={ticket.project_id} />
                        ))}
                    </CardContainer>
                </Bar>
           
            </KanbanContainer>
        </PageContainer>
    );
};

History.propTypes = {
    getAllProjectsAction: PropTypes.func,
    getAllTicketsAction: PropTypes.func,
    projects: PropTypes.array,
    tickets: PropTypes.array
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.projectReducer.projects,
        tickets: state.ticketReducer.tickets
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllProjectsAction: getAllProjectsByUserAction,
        getAllTicketsAction: getAllTicketsByUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
