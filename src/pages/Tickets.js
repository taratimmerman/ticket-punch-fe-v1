import React, { useState } from 'react';

import { IoTicketOutline } from 'react-icons/io5';

import TicketCard from '../components/TicketCard';
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



const Tickets = () => {

    const [newTicketIsOpen, setNewTicketIsOpen] = useState(false);

    return (
        <PageContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Tickets</PageTitle>
                <SolidButton className="purple restrict" onClick={() => setNewTicketIsOpen(true)}>New Ticket</SolidButton>
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
                        <TicketCard bug={true} title={"Deploy to Heroku"} project={"Ticket Punch"} description={"The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro."} status={"Stuck"} />
                    </CardContainer>
                </Bar>
                <Bar className="working-on-it">
                    <StatusTitle>Working on it</StatusTitle>
                    <CardContainer>
                        <TicketCard title={"Create GitHub repo"} project={"Ticket Punch"} description={"Praesent break yo neck, yall mi non maurizzle go to hizzle bibendizzle. Aliquam lacinia funky fresh lectizzle."} status={"Working on it"} />
                        <TicketCard title={"Build and style login flow"} project={"Ticket Punch"} description={"With pretty stories for which theres little good evidence prime number encyclopaedia galactica network of wormholes colonies extraplanetary."} status={"Working on it"}/>
                        <TicketCard title={"Build and style navbar"} project={"Ticket Punch"} description={"Flair is what marks the difference between artistry and mere competence. Commander William Riker of the Starship Enterprise."} status={"Working on it"} />
                    </CardContainer>
                </Bar>
                <Bar className="done">
                    <StatusTitle>Done</StatusTitle>
                    <CardContainer>
                        <TicketCard title={"Design site wireframes"} project={"Ticket Punch"} status={"Done"} description={"I guess it's better to be lucky than good. Is it my imagination, or have tempers become a little frayed on the ship lately?"} />
                        <TicketCard title={"Research app idea"} project={"Ticket Punch"} status={"Done"} description={"The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat."} />
                    </CardContainer>
                </Bar>
            </KanbanContainer>
        </PageContainer>
    );
};

export default Tickets;