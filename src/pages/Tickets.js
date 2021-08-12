import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { IoTicketOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllTicketsByUserAction } from '../actions/ticketActions';
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
    SolidTextArea
} from '../styling/PageStyling';

const Tickets = ({ getAllTicketsAction, tickets }) => {

    useEffect(() => {
        getAllTicketsAction(activeUserId);
    }, []);

    const [newTicketIsOpen, setNewTicketIsOpen] = useState(false);

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
                <StyledForm>
                    <StyledLabel
                        htmlFor="ticket-name"
                    >Ticket Name</StyledLabel>

                    <SolidInput
                        type="text"
                        name="ticket-name"
                        placeholder="Ticket Name"
                    />

                    <StyledLabel
                        htmlFor="ticket-description"
                    >Ticket Description</StyledLabel>

                    <SolidTextArea
                        type="text"
                        name="ticket-description"
                        placeholder="Ticket Description"
                    />

                    <StyledLabel
                        htmlFor="project-name"
                    >Project Name</StyledLabel>

                    <SolidDropdown name="project-name">
                        <option>---</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="ticket-status"
                    >Ticket Status</StyledLabel>

                    <SolidDropdown name="ticket-status">
                        <option>---</option>
                        <option value="stuck">Stuck</option>
                        <option value="working_on_it">Working on it</option>
                        <option value="done">Done</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="bug"
                    >Is this a bug ticket?</StyledLabel>

                    <SolidDropdown name="bug">
                        <option>---</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </SolidDropdown>
                </StyledForm>
                <ModalButtonContainer>
                    <OutlineButton
                        className="green restrict"
                        onClick={() => setNewTicketIsOpen(false)}
                    >Cancel</OutlineButton>

                    <SolidButton
                        type="submit"
                        className="green restrict"
                    >Add Ticket</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

            <KanbanContainer>
                <Bar className="stuck">
                    <StatusTitle>Stuck</StatusTitle>
                    <CardContainer>
                        {tickets.filter(ticket => (
                            ticket.status === "stuck"
                        )).map(ticket => (<div key={ticket.id}>
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} projectTitle={ticket.ticketProjectTitle} />
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
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} projectTitle={ticket.ticketProjectTitle}/>
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
                            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} projectTitle={ticket.ticketProjectTitle}/>
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
    tickets: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketReducer.tickets
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllTicketsAction: getAllTicketsByUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);