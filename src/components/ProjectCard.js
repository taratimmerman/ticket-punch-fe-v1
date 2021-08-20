import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { GiBoxingGlove } from 'react-icons/gi';
import { MdError } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openDeleteProjectModalAction, closeDeleteProjectModalAction, openEditProjectModalAction, closeEditProjectModalAction } from '../actions/modalActions';
import { deleteProjectAction, editProjectAction } from '../actions/projectActions';
import { getUserId } from '../helpers/getUserInfo';
import {
    CardContainer,
    TitleWrapper,
    ContentWrapper,
    CardTitle,
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
    ModalDetails,
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

const ProjectCard = (props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            title: `${props.projectTitle}`,
            description: `${props.projectDescription}`,
            status: `${props.projectStatus}`
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
    }

    const handleEditProject = (projectEdits) => {
        const id = props.projectId;
        const user_id = getUserId();
        const title = projectEdits.title.trim();
        const description = projectEdits.description.trim();
        const status = projectEdits.status;
        const archived = projectEdits.status === "archived" ? true : false;

        console.log('Project edits: ', id, user_id, title, description, status, archived);
        props.editProjectAction(id, user_id, title, description, status, archived);
        reset();
    };

    const handleError = (errors) => console.log(errors);

    const editProjectValidation = {
        title: {
            required: "Please enter the project title",
            maxLength: {
                value: 30,
                message: "Project titles must be less than 30 characters"
            }
        },
        description: {
            required: "Please enter the project description",
            maxLength: {
                value: 140,
                message: "Project descriptions must be less than 140 characters"
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
                {props.archived ? <VscHistory /> : null}
            </TitleWrapper>
            <ContentWrapper
                ref={card}
                style={{ maxHeight: `${setHeight}` }}
                className={`${setActive}`}
            >
                <CardSectionWrapper>

                    <CardSectionLeft>

                        <CardLabel>Project ID</CardLabel>
                        <CardDescription>{props.id}</CardDescription>

                        <CardLabel>Project Description</CardLabel>
                        <CardDescription>{props.description}</CardDescription>

                        <CardLabel>Project Status</CardLabel>
                        <CardStatus>{props.status}</CardStatus>

                    </CardSectionLeft>

                    <CardSectionRight>

                        {props.archived ? null :
                            <CardButtonWrapper>
                                <Button
                                    className="gray condensed"
                                    onClick={() => props.openDeleteProjectModalAction()}
                                    text={<BsTrash />}
                                />
                                <Button
                                    className="gray condensed"
                                    onClick={() => props.openEditProjectModalAction()}
                                    text={<BsPencil />}
                                />
                            </CardButtonWrapper>
                        }

                    </CardSectionRight>

                </CardSectionWrapper>
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

                <ErrorMessage error={props.errorMessage} />

                <ModalDetails>Related tickets will also be deleted</ModalDetails>

                <SubActionContainer>
                    <SubAction>This action cannot be undone</SubAction>
                </SubActionContainer>

                <ModalButtonContainer>
                    <Button
                        className="red"
                        onClick={() => props.deleteProjectAction(props.projectId)}
                        text={"Delete Project"}
                    />
                </ModalButtonContainer>

                <ModalButtonContainer>
                    <Button
                        className="red secondary"
                        onClick={() => props.closeDeleteProjectModalAction()}
                        text={"Cancel"}
                    />
                </ModalButtonContainer>

            </ModalContainer>

            {/* EDIT PROJECT MODAL */}
            <ModalContainer
                className="purple"
                isOpen={props.showEditModal}
                onRequestClose={() => props.closeEditProjectModalAction()}
                closeTimeoutMS={200}
                contentLabel="modal"
            >
                <ModalCircle className="purple">
                    <GiBoxingGlove />
                </ModalCircle>

                <ModalAction>Edit <ModalItem className="purple">{`${props.projectTitle}`}</ModalItem> Project</ModalAction>

                <ErrorMessage error={props.errorMessage} />

                <StyledForm onSubmit={handleSubmit(handleEditProject, handleError)}>
                    <StyledLabel
                        htmlFor="title"
                    >Project Title</StyledLabel>

                    <SolidInput
                        type="text"
                        {...register('title', editProjectValidation.title)}
                        name="title"
                        placeholder={`${props.projectTitle}`}
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
                    >Project Description</StyledLabel>

                    <SolidTextArea
                        type="text"
                        {...register('description', editProjectValidation.description)}
                        name="description"
                        placeholder={`${props.projectDescription}`}
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
                        htmlFor="status"
                    >Project Status</StyledLabel>

                    <SolidDropdown
                        name="status"
                        {...register('status')}
                    >
                        <option>---</option>
                        <option value="working_on_it">Working on it</option>
                        <option value="done">Done</option>
                        <option value="archived">Archived</option>
                    </SolidDropdown>
                    <SubActionContainer>
                        <SubAction>These changes cannot be undone</SubAction>
                    </SubActionContainer>

                    <ModalButtonContainer>
                        <Button
                            type="submit"
                            className="purple"
                            text={"Edit Project"}
                        />
                    </ModalButtonContainer>

                </StyledForm>

                <ModalButtonContainer>
                    <Button
                        className="purple secondary"
                        onClick={() => props.closeEditProjectModalAction()}
                        text={"Cancel"}
                    />
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
    projectDescription: PropTypes.string,
    projectStatus: PropTypes.string,
    deleteProjectAction: PropTypes.func,
    openDeleteProjectModalAction: PropTypes.func,
    closeDeleteProjectModalAction: PropTypes.func,
    showDeleteModal: PropTypes.bool,
    editProjectAction: PropTypes.func,
    openEditProjectModalAction: PropTypes.func,
    closeEditProjectModalAction: PropTypes.func,
    showEditModal: PropTypes.bool,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        projectId: state.projectReducer.projectId,
        projectTitle: state.projectReducer.projectTitle,
        projectDescription: state.projectReducer.projectDescription,
        projectStatus: state.projectReducer.projectStatus,
        showDeleteModal: state.modalReducer.showDeleteProjectModal,
        showEditModal: state.modalReducer.showEditProjectModal,
        errorMessage: state.projectReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteProjectAction: deleteProjectAction,
        openDeleteProjectModalAction: openDeleteProjectModalAction,
        closeDeleteProjectModalAction: closeDeleteProjectModalAction,
        editProjectAction: editProjectAction,
        openEditProjectModalAction: openEditProjectModalAction,
        closeEditProjectModalAction: closeEditProjectModalAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
