import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { GiBoxingGlove } from 'react-icons/gi';
import { VscHistory } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openDeleteProjectModalAction, closeDeleteProjectModalAction } from '../actions/modalActions';
import { deleteProjectAction } from '../actions/projectActions';
import {
    CardContainer,
    TitleWrapper,
    ContentWrapper,
    CardTitle,
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
    ModalAction,
    ModalDetails,
    ModalItem
} from '../styling/ModalStyling';
import {
    SolidInput,
    StyledForm,
    StyledLabel,
    SolidDropdown,
    SolidTextArea,
    OutlineButton,
    SolidButton
} from '../styling/PageStyling';
import {
    CTA,
    SubAction
} from '../styling/WelcomeStyling';

const ProjectCard = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setEditProjectIsOpen, setEditProjectIsOpenState] = useState(false);

    const card = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${card.current.scrollHeight}px`
        );
    }

    return (
        <CardContainer>
            <TitleWrapper
                className={`${setActive}`}
                onClick={toggleAccordion}
            >
                <CardTitle>{props.title}</CardTitle>
                {props.archived ? <VscHistory /> : null}
            </TitleWrapper>
            <ContentWrapper
                ref={card}
                style={{ maxHeight: `${setHeight}` }}
                className={`${setActive}`}
            >
                <CardLabel>Project ID</CardLabel>
                <CardDescription>{props.id}</CardDescription>

                <CardLabel>Project Description</CardLabel>
                <CardDescription>{props.description}</CardDescription>

                <CardLabel>Project Status</CardLabel>
                <CardStatus>{props.status}</CardStatus>

                {props.archived ? null :
                    <CardButtonWrapper>
                        <CardButton onClick={() => props.openDeleteProjectModalAction()}>Delete</CardButton>
                        <CardButton onClick={() => setEditProjectIsOpenState(true)}>Edit</CardButton>
                    </CardButtonWrapper>}
            </ContentWrapper>

            {/* DELETE PROJECT MODAL */}
            <ModalContainer
                className="red"
                isOpen={props.showDeleteModal} onRequestClose={() => props.closeDeleteProjectModalAction()}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="red">
                    <BsTrash />
                </ModalCircle>
                <ModalAction>Delete<ModalItem className="red">{`${props.projectTitle}`}</ModalItem>Project?</ModalAction>

                <ModalDetails>Related tickets will also be deleted</ModalDetails>

                <SubAction>This action cannot be undone</SubAction>

                <ModalButtonContainer>
                    <OutlineButton className="red restrict" onClick={() => props.closeDeleteProjectModalAction()}>Cancel</OutlineButton>
                    <SolidButton className="red restrict" onClick={() => props.deleteProjectAction(props.projectId)}>Delete Project</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

            {/* EDIT PROJECT MODAL */}
            <ModalContainer
                className="purple"
                isOpen={setEditProjectIsOpen}
                onRequestClose={() => setEditProjectIsOpenState(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="purple">
                    <GiBoxingGlove />
                </ModalCircle>

                <CTA>Edit Project</CTA>
                <StyledForm>
                    <StyledLabel
                        htmlFor="project-name"
                    >Project Name</StyledLabel>

                    <SolidInput
                        type="text"
                        name="project-name"
                        placeholder="Project Name"
                    />

                    <StyledLabel
                        htmlFor="project-description"
                    >Project Description</StyledLabel>

                    <SolidTextArea
                        type="text"
                        name="project-description"
                        placeholder="Project Description"
                    />

                    <StyledLabel
                        htmlFor="project-status"
                    >Project Status</StyledLabel>

                    <SolidDropdown name="project-status">
                        <option>---</option>
                        <option value="stuck">Stuck</option>
                        <option value="working-on-it">Working on it</option>
                        <option value="done">Done</option>
                    </SolidDropdown>
                </StyledForm>

                <SubAction>These changes cannot be undone</SubAction>

                <ModalButtonContainer>
                    <OutlineButton
                        className="purple restrict"
                        onClick={() => setEditProjectIsOpenState(false)}
                    >Cancel</OutlineButton>

                    <SolidButton
                        type="submit"
                        className="purple restrict"
                    >Edit Project</SolidButton>
                </ModalButtonContainer>
            </ModalContainer>

        </CardContainer>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    bug: PropTypes.bool,
    archived: PropTypes.bool,
    description: PropTypes.string,
    project: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number,
    projectId: PropTypes.number,
    projectTitle: PropTypes.string,
    deleteProjectAction: PropTypes.func,
    openDeleteProjectModalAction: PropTypes.func,
    closeDeleteProjectModalAction: PropTypes.func,
    showDeleteModal: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        projectId: state.projectReducer.projectId,
        projectTitle: state.projectReducer.projectTitle,
        showDeleteModal: state.modalsReducer.showDeleteProjectModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteProjectAction: deleteProjectAction,
        openDeleteProjectModalAction: openDeleteProjectModalAction,
        closeDeleteProjectModalAction: closeDeleteProjectModalAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
