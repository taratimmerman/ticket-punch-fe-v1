import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { IoTicketOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllProjectsByUserAction } from '../actions/projectActions';
import { createTicketAction, getAllTicketsByUserAction } from '../actions/ticketActions';
import TicketCard from '../components/TicketCard';
import { activeUserId } from '../helpers/getUserId';
import {
    ModalContainer,
    ModalCircle,
    ModalButtonContainer,
    ModalAction
} from '../styling/ModalStyling';
import {
    PageContainer,
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
    SolidTextArea,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';

const Tickets = ({ getAllTicketsAction, tickets, getAllProjectsAction, projects, createTicketAction }) => {

    useEffect(() => {
        getAllTicketsAction(activeUserId);
        getAllProjectsAction(activeUserId);
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [newTicketIsOpen, setNewTicketIsOpen] = useState(false);

    const handleCreateTicket = (newTicket) => {
        const user_id = activeUserId;
        const title = newTicket.title.trim();
        const description = newTicket.description.trim();
        const status = newTicket.status;
        const bug = newTicket.bug;
        const project_id = newTicket.projectTitle;
        console.log('New ticket: ', user_id, title, description, status, bug, project_id);

        createTicketAction(user_id, title, description, status, bug, project_id);
        reset();
    };

    const handleError = (errors) => console.log(errors);

    const newTicketValidation = {
        title: {
            required: "Please enter the ticket title",
            maxLength: {
                value: 30,
                message: "Ticket titles must be less than 30 characters"
            }
        },
        description: {
            required: "Please enter the ticket description",
            maxLength: {
                value: 140,
                message: "Ticket descriptions must be less than 30 characters"
            }
        }
    };

    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Tickets</PageTitle>
                <SolidButton className="purple restrict" onClick={() => setNewTicketIsOpen(true)}>New Ticket</SolidButton>
            </PageTitleWrapper>

            {/* New Ticket Modal */}
            <ModalContainer
                className="green"
                isOpen={newTicketIsOpen}
                onRequestClose={() => setNewTicketIsOpen(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="green">
                    <IoTicketOutline />
                </ModalCircle>
                <ModalAction>Add Ticket</ModalAction>
                <StyledForm onSubmit={handleSubmit(handleCreateTicket, handleError)}>
                    <StyledLabel
                        htmlFor="title"
                    >Ticket Name</StyledLabel>

                    <SolidInput
                        type="text"
                        {...register('title', newTicketValidation.title)}
                        name="title"
                        className={`${errors.title ? "error" : null}`}
                        placeholder="Enter the ticket title"
                    />
                    {errors.title ?
                        <InlineErrorWrapper>
                            <InlineErrorIcon>
                                <MdError />
                            </InlineErrorIcon>
                            <InlineError>{errors.title.message}</InlineError>
                        </InlineErrorWrapper>
                        : null}

                    <StyledLabel
                        htmlFor="description"
                    >Ticket Description</StyledLabel>

                    <SolidTextArea
                        type="text"
                        {...register('description', newTicketValidation.description)}
                        name="description"
                        placeholder="Enter the ticket description"
                    />
                    {errors.description ?
                        <InlineErrorWrapper>
                            <InlineErrorIcon>
                                <MdError />
                            </InlineErrorIcon>
                            <InlineError>{errors.description.message}</InlineError>
                        </InlineErrorWrapper>
                        : null}

                    <StyledLabel
                        htmlFor="projectTitle"
                    >Project Title</StyledLabel>

                    <SolidDropdown
                    name="projectTitle"
                    {...register('projectTitle')}
                    >
                        <option>---</option>
                        {projects.map(project => (
                            <option key={project.id} value={project.id}>{project.title}</option>
                        ))}
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="status"
                    >Ticket Status</StyledLabel>

                    <SolidDropdown
                    name="status"
                    {...register('status')}
                    >
                        <option>---</option>
                        <option value="stuck">Stuck</option>
                        <option value="working_on_it">Working on it</option>
                        <option value="done">Done</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="bug"
                    >Is this a bug ticket?</StyledLabel>

                    <SolidDropdown
                    name="bug"
                    {...register('bug')}
                    >
                        <option>---</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </SolidDropdown>

                    <ModalButtonContainer>
                        <SolidButton
                            type="submit"
                            className="green restrict"
                        >Add Ticket</SolidButton>
                    </ModalButtonContainer>

                </StyledForm>
                <ModalButtonContainer>
                    <OutlineButton
                        className="green restrict"
                        onClick={() => setNewTicketIsOpen(false)}
                    >Cancel</OutlineButton>
                </ModalButtonContainer>
            </ModalContainer>

            <KanbanContainer>
                <Bar className="stuck">
                    <StatusTitle>Stuck</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "stuck"
                        )).map(ticket => (<div key={ticket.id}>
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} bug={ticket.bug} projectId={ticket.project_id} />
                        </div>
                        ))}
                    </CardContainer>
                </Bar>
                <Bar className="working-on-it">
                    <StatusTitle>Working on it</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "working_on_it"
                        )).map(ticket => (<div key={ticket.id}>
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} bug={ticket.bug} projectId={ticket.project_id} />
                        </div>
                        ))}
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "done"
                        )).map(ticket => (<div key={ticket.id}>
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} bug={ticket.bug} projectId={ticket.project_id} />
                        </div>
                        ))}
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

Tickets.propTypes = {
    getAllTicketsAction: PropTypes.func,
    tickets: PropTypes.array,
    getAllProjectsAction: PropTypes.func,
    projects: PropTypes.array,
    createTicketAction: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketReducer.tickets,
        projects: state.projectReducer.projects
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllTicketsAction: getAllTicketsByUserAction,
        getAllProjectsAction: getAllProjectsByUserAction,
        createTicketAction: createTicketAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);