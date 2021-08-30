import React from 'react';

import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDeleteProjectModalAction, closeDeleteTicketModalAction, closeDeleteAccountModalAction } from '../../actions/modalActions';
import { deleteProjectAction } from '../../actions/projectActions';
import { deleteTicketAction } from '../../actions/ticketActions';
import { deleteUserAction } from '../../actions/userActions';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/errors/ErrorMessage';
import { getUserId, getUsername } from '../../helpers/getUserInfo';
import { capitalizeFirstLetter } from '../../helpers/humanizeString';
import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalItem,
    ModalDetails,
    ModalButtonContainer
} from '../../styling/ModalStyling';
import {
    SubAction,
    SubActionContainer
} from '../../styling/WelcomeStyling';

const DeleteModal = props => {

    const isDeleteModalOpen = (type) => {
        let showModalBool;
        switch (type) {
            case "project":
                showModalBool = props.showDeleteProjectModal;
                break;
            case "ticket":
                showModalBool = props.showDeleteTicketModal;
                break;
            case "profile":
                showModalBool = props.showDeleteAccountModal;
                break;
            default:
                showModalBool = null;
        }
        return showModalBool;
    };

    const closeDeleteModal = (type) => {
        let closeThisModal;
        switch (type) {
            case "project":
                closeThisModal = props.closeDeleteProjectModalAction();
                break;
            case "ticket":
                closeThisModal = props.closeDeleteTicketModalAction();
                break;
            case "profile":
                closeThisModal = props.closeDeleteAccountModalAction();
                break;
            default:
                closeThisModal = null;
        }
        return closeThisModal;
    };

    const determineItemTitle = (type) => {
        let title;
        switch (type) {
            case "project":
                title = props.projectTitle;
                break;
            case "ticket":
                title = props.ticketTitle;
                break;
            case "profile":
                title = getUsername();
                break;
            default:
                title = '';
        }
        return title;
    };

    const determineItemId = (type) => {
        let id;
        switch (type) {
            case "project":
                id = props.projectId;
                break;
            case "ticket":
                id = props.ticketId;
                break;
            case "profile":
                id = getUserId();
                break;
            default:
                id = 0;
        }
        return id;
    };

    const deleteItem = (type, id) => {
        let deleteAction;
        switch (type) {
            case "project":
                deleteAction = props.deleteProjectAction(id);
                break;
            case "ticket":
                deleteAction = props.deleteTicketAction(id);
                break;
            case "profile":
                deleteAction = props.deleteUserAction(id);
                break;
            default:
                deleteAction = null;
        }
        return deleteAction;
    };

    const determineError = (type) => {
        let errorMessage;
        switch (type) {
            case "project":
                errorMessage = props.projectErrorMessage;
                break;
            case "ticket":
                errorMessage = props.ticketErrorMessage;
                break;
            case "profile":
                errorMessage = props.profileErrorMessage;
                break;
            default:
                errorMessage = '';
        }
        return errorMessage;
    };

    return (
        <ModalContainer
            className="red"
            isOpen={isDeleteModalOpen(props.pageType)}
            onRequestClose={() => closeDeleteModal(props.pageType)}
            closeTimeoutMS={200}
            contentLabel="modal"
        >
            <ModalCircle className="red">
                <BsTrash />
            </ModalCircle>
            <ModalAction>Delete<ModalItem className="red">{determineItemTitle(props.pageType)}</ModalItem>{capitalizeFirstLetter(`${props.pageType}?`)}</ModalAction>

            <ErrorMessage error={determineError(props.pageType)} />

            {props.pageType === "project" ?
                <ModalDetails>Related tickets will also be deleted</ModalDetails>
                : null
            }

            {props.pageType === "profile" ?
                <>
                    <ModalDetails>You will permanently lose your:</ModalDetails>
                    <ul>
                        <li>Profile</li>
                        <li>Projects</li>
                        <li>Tickets</li>
                    </ul>
                </>
                : null
            }

            <SubActionContainer>
                <SubAction>This action cannot be undone</SubAction>
            </SubActionContainer>

            <ModalButtonContainer>
                <Button
                    className="red"
                    onClick={() => deleteItem(props.pageType, determineItemId(props.pageType))}
                    text={"Delete Project"}
                />
            </ModalButtonContainer>

            <ModalButtonContainer>
                <Button
                    className="red secondary"
                    onClick={() => closeDeleteModal(props.pageType)}
                    text={"Cancel"}
                />
            </ModalButtonContainer>

        </ModalContainer>
    );
};

DeleteModal.propTypes = {
    // Project PropTypes
    projectTitle: PropTypes.string,
    projectId: PropTypes.number,
    showDeleteProjectModal: PropTypes.bool,
    projectErrorMessage: PropTypes.string,
    deleteProjectAction: PropTypes.func,
    closeDeleteProjectModalAction: PropTypes.func,
    // Ticket PropTypes
    ticketTitle: PropTypes.string,
    ticketId: PropTypes.number,
    showDeleteTicketModal: PropTypes.bool,
    ticketErrorMessage: PropTypes.string,
    deleteTicketAction: PropTypes.func,
    closeDeleteTicketModalAction: PropTypes.func,
    // Profile Props
    showDeleteAccountModal: PropTypes.bool,
    profileErrorMessage: PropTypes.string,
    deleteUserAction: PropTypes.func,
    closeDeleteAccountModalAction: PropTypes.func,
    // Any page props
    pageType: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        // Project Props
        projectTitle: state.projectReducer.projectTitle,
        projectId: state.projectReducer.projectId,
        showDeleteProjectModal: state.modalReducer.showDeleteProjectModal,
        projectErrorMessage: state.projectReducer.error,
        // Ticket Props
        ticketTitle: state.ticketReducer.ticketTitle,
        ticketId: state.ticketReducer.ticketId,
        showDeleteTicketModal: state.modalReducer.showDeleteTicketModal,
        ticketErrorMessage: state.ticketReducer.error,
        // Profile Props
        showDeleteAccountModal: state.modalReducer.showDeleteAccountModal,
        profileErrorMessage: state.userReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // Project Actions
        deleteProjectAction: deleteProjectAction,
        closeDeleteProjectModalAction: closeDeleteProjectModalAction,
        // Ticket Actions
        deleteTicketAction: deleteTicketAction,
        closeDeleteTicketModalAction: closeDeleteTicketModalAction,
        // Profile Actions
        deleteUserAction: deleteUserAction,
        closeDeleteAccountModalAction: closeDeleteAccountModalAction,

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
