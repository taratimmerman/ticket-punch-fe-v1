import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { ImBug } from "react-icons/im";
import { IoTicketOutline } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProjectByIdAction } from '../actions/projectActions';
import {
    CardContainer,
    TitleWrapper,
    ContentWrapper,
    CardTitle,
    CardProject,
    CardDescription,
    CardStatus,
    CardButtonWrapper,
    CardButton,
    CardLabel
} from '../styling/CardStyling';
import {
    ModalContainer,
    ModalCircle,
    ModalButtonContainer,
    ModalAction
} from '../styling/ModalStyling';
import {
    SolidButton,
    OutlineButton,
    SolidInput,
    StyledForm,
    StyledLabel,
    SolidDropdown,
    SolidTextArea
} from '../styling/PageStyling';
import {
    CTA,
    SubAction
} from '../styling/WelcomeStyling';

const TicketCard = props => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setDeleteTicketIsOpen, setDeleteTicketIsOpenState] = useState(false);
    const [setEditTicketIsOpen, setEditTicketIsOpenState] = useState(false);

    const card = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${card.current.scrollHeight}px`
        );
        props.getProjectByIdAction(props.projectId);
    }

    return (
        <CardContainer>
            <TitleWrapper
                className={`${setActive}`}
                onClick={toggleAccordion}
            >
                <CardTitle>{props.title}</CardTitle>
                {props.bug ? <ImBug /> : null}
                {props.archived ? <VscHistory /> : null}
            </TitleWrapper>
            <ContentWrapper
                ref={card}
                style={{ maxHeight: `${setHeight}` }}
                className={`${setActive}`}
            >
                <CardLabel>Ticket ID</CardLabel>
                <CardProject>{props.id}</CardProject>

                <CardLabel>Project Title</CardLabel>
                <CardProject>{props.project.title}</CardProject>

                <CardLabel>Ticket Description</CardLabel>
                <CardDescription>{props.description}</CardDescription>

                <CardLabel>Ticket Status</CardLabel>
                <CardStatus>{props.status}</CardStatus>

                {props.archived ? null :
                    <CardButtonWrapper>
                        <CardButton onClick={() => setDeleteTicketIsOpenState(true)}>Delete</CardButton>
                        <CardButton onClick={() => setEditTicketIsOpenState(true)}>Edit</CardButton>
                    </CardButtonWrapper>}
            </ContentWrapper>

            {/* DELETE TICKET MODAL */}
            <ModalContainer
                className="red"
                isOpen={setDeleteTicketIsOpen} onRequestClose={() => setDeleteTicketIsOpenState(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="red">
                    <BsTrash />
                </ModalCircle>
                <ModalAction>Delete Ticket?</ModalAction>
                <SubAction>This action cannot be undone</SubAction>

                <ModalButtonContainer>
                    <OutlineButton className="red restrict" onClick={() => setDeleteTicketIsOpenState(false)}>Cancel</OutlineButton>
                    <SolidButton className="red restrict">Delete Ticket</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

            {/* EDIT TICKET MODAL */}
            <ModalContainer
                className="purple"
                isOpen={setEditTicketIsOpen}
                onRequestClose={() => setEditTicketIsOpenState(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="purple">
                    <IoTicketOutline />
                </ModalCircle>
                <CTA>Edit Ticket</CTA>
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

                <SubAction>These changes cannot be undone</SubAction>

                <ModalButtonContainer>
                    <OutlineButton
                        className="purple restrict"
                        onClick={() => setEditTicketIsOpenState(false)}
                    >Cancel</OutlineButton>

                    <SolidButton
                        type="submit"
                        className="purple restrict"
                    >Edit Ticket</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

        </CardContainer>
    );
};

TicketCard.propTypes = {
    title: PropTypes.string,
    bug: PropTypes.bool,
    archived: PropTypes.bool,
    description: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number,
    getProjectByIdAction: PropTypes.func,
    projectId: PropTypes.number,
    ticket: PropTypes.object,
    project: PropTypes.object
};

const mapStateToProps = (state) => {
    console.log(state.projectReducer.project);
    return {
        project: state.projectReducer.project
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProjectByIdAction: getProjectByIdAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);