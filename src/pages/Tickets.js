import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { IoTicketOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAddTicketModalAction, closeAddTicketModalAction } from '../actions/modalActions';
import { getAllProjectsByUserAction } from '../actions/projectActions';
import { createTicketAction, getAllTicketsByUserAction, targetTicketAcion } from '../actions/ticketActions';
import Button from '../components/button/Button';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';
import TicketCard from '../components/TicketCard';
import { getUserId } from '../helpers/getUserInfo';
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

const Tickets = ({ getAllTicketsAction, tickets, getAllProjectsAction, projects, createTicketAction, openModalAction, closeModalAction, showModal, targetTicketAcion, errorMessage, isEditing, isDeleting }) => {

    useEffect(() => {
        getAllTicketsAction(getUserId());
        getAllProjectsAction(getUserId());
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const handleCreateTicket = (newTicket) => {
        const user_id = getUserId();
        const title = newTicket.title.trim();
        const description = newTicket.description.trim();
        const status = newTicket.status;
        const bug = newTicket.bug;
        const project_id = newTicket.projectTitle;

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
                message: "Ticket descriptions must be less than 140 characters"
            }
        }
    };

    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Tickets</PageTitle>
                <Button onClick={() => openModalAction()} text={"New Ticket"} className={"purple"} />
            </PageTitleWrapper>

            {/* New Ticket Modal */}
            <ModalContainer
                className="green"
                isOpen={showModal}
                onRequestClose={() => closeModalAction()}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="green">
                    <IoTicketOutline />
                </ModalCircle>
                <ModalAction>Add Ticket</ModalAction>

                <ErrorMessage error={errorMessage} />

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
                        <InlineErrorMessage inlineErrorMessage={errors.title.message} />
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
                        <InlineErrorMessage inlineErrorMessage={errors.description.message} />
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
                        <Button
                            type="submit"
                            className="green"
                            text={"Add Ticket"}
                        />
                    </ModalButtonContainer>

                </StyledForm>
                <ModalButtonContainer>
                    <Button
                        className="green secondary"
                        onClick={() => closeModalAction()}
                        text={"Cancel"}
                    />
                </ModalButtonContainer>
            </ModalContainer>

            <KanbanContainer>
                <Bar className="stuck">
                    <StatusTitle>Stuck</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "stuck"
                        )).map(ticket => (
                            <div
                                key={ticket.id}
                                onClick={() => isEditing || isDeleting ? null : targetTicketAcion(ticket.id, ticket.title, ticket.description, ticket.status, ticket.bug, ticket.archived, ticket.project_id)}
                            >
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
                        )).map(ticket => (
                            <div
                                key={ticket.id}
                                onClick={() => isEditing || isDeleting ? null : targetTicketAcion(ticket.id, ticket.title, ticket.description, ticket.status, ticket.bug, ticket.archived, ticket.project_id)}
                            >
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
                        )).map(ticket => (
                            <div
                                key={ticket.id}
                                onClick={() => isEditing || isDeleting ? null : targetTicketAcion(ticket.id, ticket.title, ticket.description, ticket.status, ticket.bug, ticket.archived, ticket.project_id)}
                            >
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
    createTicketAction: PropTypes.func,
    openModalAction: PropTypes.func,
    closeModalAction: PropTypes.func,
    showModal: PropTypes.bool,
    targetTicketAcion: PropTypes.func,
    errorMessage: PropTypes.string,
    isEditing: PropTypes.bool,
    isDeleting: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketReducer.tickets,
        projects: state.projectReducer.projects,
        showModal: state.modalReducer.showAddTicketModal,
        errorMessage: state.ticketReducer.error,
        isEditing: state.modalReducer.showEditTicketModal,
        isDeleting: state.modalReducer.showDeleteTicketModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllTicketsAction: getAllTicketsByUserAction,
        getAllProjectsAction: getAllProjectsByUserAction,
        createTicketAction: createTicketAction,
        openModalAction: openAddTicketModalAction,
        closeModalAction: closeAddTicketModalAction,
        targetTicketAcion: targetTicketAcion
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);