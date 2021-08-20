import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { ImBug } from "react-icons/im";
import { IoTicketOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openDeleteTicketModalAction, closeDeleteTicketModalAction, openEditTicketModalAction, closeEditTicketModalAction } from '../actions/modalActions';
import { getProjectByIdAction } from '../actions/projectActions';
import { deleteTicketAction, editTicketAction } from '../actions/ticketActions';
import { getUserId } from '../helpers/getUserInfo';
import { capitalizeFirstLetter } from '../helpers/humanizeString';
import {
    CardContainer,
    TitleWrapper,
    ContentWrapper,
    CardTitle,
    CardProject,
    CardDescription,
    CardStatus,
    CardButtonWrapper,
    CardLabel,
    CardSectionLeft,
    CardSectionRight,
    CardSectionWrapper
} from '../styling/CardStyling';
import {
    ModalContainer,
    ModalCircle,
    ModalButtonContainer,
    ModalAction,
    ModalItem
} from '../styling/ModalStyling';
import {
    SolidInput,
    StyledForm,
    StyledLabel,
    SolidDropdown,
    SolidTextArea,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';
import {
    SubActionContainer,
    SubAction
} from '../styling/WelcomeStyling';
import Button from './button/Button';
import ErrorMessage from './ErrorMessage';

const TicketCard = props => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            title: `${props.ticketTitle}`,
            description: `${props.ticketDescription}`,
            status: `${props.ticketStatus}`,
            projectTitle: `${props.projectTitle}`,
            bug: `${props.ticketBug}`,
            archived: `${props.ticketArchived}`
        }
    });

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const card = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${card.current.scrollHeight}px`
        );
        props.getProjectByIdAction(props.projectId);
    }

    const handleEditTicket = (ticketEdits) => {
        const id = props.ticketId;
        const user_id = getUserId();
        const project_id = parseInt(ticketEdits.projectTitle);
        const title = ticketEdits.title.trim();
        const description = ticketEdits.description.trim();
        const status = ticketEdits.status;
        const bug = ticketEdits.bug === "true" ? true : false;
        const archived = ticketEdits.status === "archived" ? true : false;

        console.log(id, user_id, project_id, title, description, status, bug, archived);
        console.log('Ticket title type: ', typeof title);
        console.log('Tickets object: ', ticketEdits);
        props.editTicketAction(id, user_id, project_id, title, description, status, bug, archived);
        reset();
    };

    const handleError = (errors) => console.log(errors);

    const editTicketValidation = {
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
                <CardSectionWrapper>

                    <CardSectionLeft>

                        <CardLabel>Ticket ID</CardLabel>
                        <CardProject>{props.id}</CardProject>

                        <CardLabel>Project Title</CardLabel>
                        <CardProject>{props.project.title}</CardProject>

                        <CardLabel>Ticket Description</CardLabel>
                        <CardDescription>{props.description}</CardDescription>

                        <CardLabel>Ticket Status</CardLabel>
                        <CardStatus>{capitalizeFirstLetter(props.status)}</CardStatus>

                    </CardSectionLeft>

                    <CardSectionRight>

                    {props.archived ? null :
                        <CardButtonWrapper>
                            <Button
                                className="gray condensed"
                                onClick={() => props.openDeleteTicketModalAction()}
                                text={<BsTrash />}
                            />
                            <Button
                                className="gray condensed"
                                onClick={() => props.openEditTicketModalAction()}
                                text={<BsPencil />}
                            />
                        </CardButtonWrapper>
                    }

                    </CardSectionRight>

                </CardSectionWrapper>

            </ContentWrapper>

            {/* DELETE TICKET MODAL */}
            <ModalContainer
                className="red"
                isOpen={props.showDeleteModal} onRequestClose={() => props.closeDeleteTicketModalAction()}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="red">
                    <BsTrash />
                </ModalCircle>
                <ModalAction>Delete <ModalItem className="red">{`${props.ticketTitle}`}</ModalItem> Ticket?</ModalAction>

                <ErrorMessage error={props.errorMessage} />

                <SubActionContainer>
                    <SubAction>This action cannot be undone</SubAction>
                </SubActionContainer>

                <ModalButtonContainer>
                    <Button
                        className="red"
                        onClick={() => props.deleteTicketAction(props.ticketId)}
                        text={"Delete Ticket"}
                    />
                </ModalButtonContainer>

                <ModalButtonContainer>
                    <Button
                        className="red secondary"
                        onClick={() => props.closeDeleteTicketModalAction()}
                        text={"Cancel"}
                    />
                </ModalButtonContainer>

            </ModalContainer>

            {/* EDIT TICKET MODAL */}
            <ModalContainer
                className="purple"
                isOpen={props.showEditModal}
                onRequestClose={() => props.closeEditTicketModalAction()}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="purple">
                    <IoTicketOutline />
                </ModalCircle>
                <ModalAction>Edit <ModalItem className="purple">{`${props.ticketTitle}`}</ModalItem> Ticket</ModalAction>

                <ErrorMessage error={props.errorMessage} />

                <StyledForm onSubmit={handleSubmit(handleEditTicket, handleError)}>
                    <StyledLabel
                        htmlFor="title"
                    >Ticket Name</StyledLabel>

                    <SolidInput
                        type="text"
                        {...register('title', editTicketValidation.title)}
                        name="title"
                        placeholder={`${props.ticketTitle}`}
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
                        {...register('description', editTicketValidation.description)}
                        name="description"
                        placeholder={`${props.ticketDescription}`}
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
                        <option disabled defaultValue>{props.projectTitle}</option>
                        {props.projects.map(project => (
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
                        <option disabled defaultValue>{props.ticketStatus}</option>
                        <option value="stuck">Stuck</option>
                        <option value="working_on_it">Working on it</option>
                        <option value="done">Done</option>
                        <option value="archived">Archive</option>
                    </SolidDropdown>

                    <StyledLabel
                        htmlFor="bug"
                    >Is this a bug ticket?</StyledLabel>

                    <SolidDropdown
                        name="bug"
                        {...register('bug')}
                    >
                        <option disabled defaultValue>{props.ticketBug}</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </SolidDropdown>

                    <SubActionContainer>
                        <SubAction>These changes cannot be undone</SubAction>
                    </SubActionContainer>

                    <ModalButtonContainer>
                        <Button
                            type="submit"
                            className="purple"
                            text={"Edit Ticket"}
                        />
                    </ModalButtonContainer>

                </StyledForm>

                <ModalButtonContainer>
                    <Button
                        className="purple secondary"
                        onClick={() => props.closeEditTicketModalAction()}
                        text={"Cancel"}
                    />
                </ModalButtonContainer>
            </ModalContainer>

        </CardContainer >
    );
};

TicketCard.propTypes = {
    title: PropTypes.string,
    bug: PropTypes.bool,
    archived: PropTypes.bool,
    description: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number,
    ticketId: PropTypes.number,
    ticketTitle: PropTypes.string,
    ticketDescription: PropTypes.string,
    ticketStatus: PropTypes.string,
    projectTitle: PropTypes.number,
    ticketBug: PropTypes.bool,
    ticketArchived: PropTypes.bool,
    getProjectByIdAction: PropTypes.func,
    projectId: PropTypes.number,
    ticket: PropTypes.object,
    project: PropTypes.object,
    projects: PropTypes.array,
    deleteTicketAction: PropTypes.func,
    openDeleteTicketModalAction: PropTypes.func,
    closeDeleteTicketModalAction: PropTypes.func,
    showDeleteModal: PropTypes.bool,
    editTicketAction: PropTypes.func,
    openEditTicketModalAction: PropTypes.func,
    closeEditTicketModalAction: PropTypes.func,
    showEditModal: PropTypes.bool,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        project: state.projectReducer.project,
        projects: state.projectReducer.projects,
        ticketId: state.ticketReducer.ticketId,
        ticketTitle: state.ticketReducer.ticketTitle,
        ticketDescription: state.ticketReducer.ticketDescription,
        ticketStatus: state.ticketReducer.ticketStatus,
        projectTitle: state.ticketReducer.projectTitle,
        ticketBug: state.ticketReducer.ticketBug,
        ticketArchived: state.ticketReducer.ticketArchived,
        showDeleteModal: state.modalReducer.showDeleteTicketModal,
        showEditModal: state.modalReducer.showEditTicketModal,
        errorMessage: state.ticketReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProjectByIdAction: getProjectByIdAction,
        deleteTicketAction: deleteTicketAction,
        openDeleteTicketModalAction: openDeleteTicketModalAction,
        closeDeleteTicketModalAction: closeDeleteTicketModalAction,
        editTicketAction: editTicketAction,
        openEditTicketModalAction: openEditTicketModalAction,
        closeEditTicketModalAction: closeEditTicketModalAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);