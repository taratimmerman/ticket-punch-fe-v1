import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { openDeleteAccountModalAction, closeDeleteAccountModalAction, openEditAccountModalAction, closeEditAccountModalAction } from '../actions/modalActions';
import { logoutUserAction, getUserByIdAction, deleteUserAction, updateUserAction } from '../actions/userActions';
import Button from '../components/button/Button';
import ErrorMessage from '../components/errors/ErrorMessage';
import InlineErrorMessage from '../components/errors/InlineErrorMessage';
import DeleteModal from '../components/modals/DeleteModal';
import { getUserId, getUsername } from '../helpers/getUserInfo';
import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalItem,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    PageTitleWrapper,
    PageTitle,
    SolidInput,
    StyledForm,
    StyledLabel
} from '../styling/PageStyling';
import {
    SubAction,
    SubActionContainer
} from '../styling/WelcomeStyling';

const Profile = ({ logoutAction, getUserByIdAction, user, openDeleteAccountModalAction, showDeleteModal, updateUserAction, openEditAccountModalAction, closeEditAccountModalAction, showEditModal, errorMessage }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        getUserByIdAction(getUserId());
    }, []);

    const handleEditUser = (userEdits) => {
        console.log(userEdits);
        const userId = getUserId();
        const email = userEdits.email.trim();
        const password = userEdits.password.trim();

        updateUserAction(userId, email, password);
        reset;
    };

    const handleError = (errors) => console.log(errors);

    const editUserValidation = {
        email: {
            required: "Please enter your email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@company.com"
            }
        },
        password: {
            required: "Please enter your password",
            minLength: {
                value: 6,
                message: "Passwords must be six or more characters"
            }
        }
    };

    return (
        <ProfileContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Profile</PageTitle>
                <Button
                    className="purple secondary"
                    onClick={() => logoutAction()}
                    text={"Log Out"}
                />
            </PageTitleWrapper>
            <ProfileInfoContainer>
                <VscAccount fontSize={"9rem"} />
                <Username>{getUsername()}</Username>
                <ModalAction>{user.email}</ModalAction>
            </ProfileInfoContainer>
            <ProfileActionContainer>
                
                <ProfileActionWrapper onClick={() => openDeleteAccountModalAction()}>
                    <BsTrash />
                </ProfileActionWrapper>

                {showDeleteModal ? <DeleteModal pageType={"profile"} /> : null}

                <ProfileActionWrapper onClick={() => openEditAccountModalAction()}>
                    <BsPencil />
                </ProfileActionWrapper>

                {/* EDIT ACCOUNT MODAL */}
                <ModalContainer
                    className="purple"
                    isOpen={showEditModal} onRequestClose={() => closeEditAccountModalAction()}
                    closeTimeoutMS={200}
                    contentLabel="modal"
                >
                    <ModalCircle className="purple">
                        <BsPencil />
                    </ModalCircle>

                    <ModalAction>Edit<ModalItem className="purple">{getUsername()}</ModalItem>Account</ModalAction>

                    <ErrorMessage error={errorMessage} />

                    <StyledForm onSubmit={handleSubmit(handleEditUser, handleError)}>
                        <StyledLabel
                            htmlFor="email"
                        >Edit Email</StyledLabel>

                        <SolidInput
                            type="text"
                            {...register('email', editUserValidation.email)}
                            name="email"
                            className={`purple ${errors.email ? "error" : null}`}
                            placeholder={user.email}
                        />
                        {errors.email ?
                            <InlineErrorMessage inlineErrorMessage={errors.email.message} />
                            : null}

                        <StyledLabel
                            htmlFor="password"
                        >Edit Password</StyledLabel>

                        <SolidInput
                            type="password"
                            {...register('password', editUserValidation.password)}
                            name="password"
                            className={`purple ${errors.password ? "error" : null}`}
                            placeholder="Enter current or new password"
                        />
                        {errors.password ?
                            <InlineErrorMessage inlineErrorMessage={errors.email.message}/>
                            : null}


                        <SubActionContainer>
                            <SubAction>These changes cannot be undone</SubAction>
                        </SubActionContainer>

                        <ModalButtonContainer>
                            <Button
                                className="purple"
                                type="submit"
                                text={"Edit Account"}
                            />
                        </ModalButtonContainer>
                    </StyledForm>

                    <ModalButtonContainer>
                        <Button
                        className="purple secondary"
                        onClick={() => closeEditAccountModalAction()}
                        text={"Cancel"}
                        />
                    </ModalButtonContainer>
                </ModalContainer>

            </ProfileActionContainer>
        </ProfileContainer>
    );
};

Profile.propTypes = {
    logoutAction: PropTypes.func,
    getUserByIdAction: PropTypes.func,
    user: PropTypes.object,
    updateUserAction: PropTypes.func,
    deleteUserAction: PropTypes.func,
    openDeleteAccountModalAction: PropTypes.func,
    closeDeleteAccountModalAction: PropTypes.func,
    showDeleteModal: PropTypes.bool,
    openEditAccountModalAction: PropTypes.func,
    closeEditAccountModalAction: PropTypes.func,
    showEditModal: PropTypes.bool,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        showDeleteModal: state.modalReducer.showDeleteAccountModal,
        showEditModal: state.modalReducer.showEditAccountModal,
        errorMessage: state.userReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logoutAction: logoutUserAction,
        getUserByIdAction: getUserByIdAction,
        updateUserAction: updateUserAction,
        openDeleteAccountModalAction: openDeleteAccountModalAction,
        closeDeleteAccountModalAction: closeDeleteAccountModalAction,
        openEditAccountModalAction: openEditAccountModalAction,
        closeEditAccountModalAction: closeEditAccountModalAction,
        deleteUserAction: deleteUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// STYLED COMPONENTS:

const ProfileContainer = styled.section`
    padding: 30px 30px 0 90px;
    color: #E8EAED;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 95vh;
    top: 0;
    position: fixed;
    z-index: -99;
    
        @media screen and (max-width: 540px) {
            padding: 30px;
        }
`;

const ProfileInfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
  color: #A25DDC;
`;

const Username = styled.h1`
    color: #E8EAED;
    margin: 16px;
`;

const ProfileActionContainer = styled.div`
    height: 55px;
    width: 50%;
    margin: 0 25%;
    border-radius: 8px;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
`;

const ProfileActionWrapper = styled.div`
    font-size: 2rem;
    color: #9AA0A6;
    text-align: center;
    height: 55px;
    width: 55px;

        :hover{
            color: #A25DDC;
            transition-duration: 0.3s;
            cursor: pointer;
        }
`;