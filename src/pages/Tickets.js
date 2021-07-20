import React, { useState } from 'react';
import Card from '../components/Card';
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
import {
    ModalContainer,
    ModalCircle,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    CTA,
} from '../styling/WelcomeStyling';
import { IoTicketOutline } from 'react-icons/io5';


const Tickets = () => {

    const [newTicketIsOpen, setNewTicketIsOpen] = useState(false);

    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Tickets</PageTitle>
                <SolidButton className="purple" onClick={() => setNewTicketIsOpen(true)}>New Ticket</SolidButton>
            </PageTitleWrapper>

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
                <CTA>Add Ticket</CTA>
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
                        <option value="working-on-it">Working on it</option>
                        <option value="done">Done</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="bug"
                    >Is this a bug ticket?</StyledLabel>

                    <SolidDropdown name="bug">
                        <option>---</option>
                        <option>Yes</option>
                        <option>No</option>
                    </SolidDropdown>
                </StyledForm>
                <ModalButtonContainer>
                    <OutlineButton
                        className="green"
                        onClick={() => setNewTicketIsOpen(false)}
                    >Cancel</OutlineButton>

                    <SolidButton
                        type="submit"
                        className="green"
                    >Add Ticket</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

            <KanbanContainer>
                <Bar className="stuck">
                    <StatusTitle>Stuck</StatusTitle>
                    <CardContainer>
                        <Card bug={true} cardTitle={"Deploy to Heroku"} />
                    </CardContainer>
                </Bar>
                <Bar className="working-on-it">
                    <StatusTitle>Working on it</StatusTitle>
                    <CardContainer>
                        <Card cardTitle={"Create GitHub repo"} />
                        <Card cardTitle={"Build and style login flow"} />
                        <Card cardTitle={"Build and style navbar"} />
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                        <Card cardTitle={"Design site wireframes"} />
                        <Card cardTitle={"Research app idea"} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default Tickets;