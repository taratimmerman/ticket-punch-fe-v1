import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { GiBoxingGlove } from 'react-icons/gi';
import { IoTicketOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { VscHistory, VscAccount } from 'react-icons/vsc';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { msgDevAction } from '../actions/helpActions';
import { openHelpModalAction, closeHelpModalAction } from '../actions/modalActions';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SuccessMessage';
import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalDetails,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    SolidInput,
    SolidTextArea,
    StyledForm,
    StyledLabel,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';
import Button from './button/Button';

const Navbar = ({ openHelpModalAction, closeHelpModalAction, showHelpModal, msgDevAction }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    let errorMessage;
    let successMessage;

    const handleMsgDev = (message) => {
        console.log(message);
        const name = message.name.trim();
        const email = message.email.trim();
        const question = message.question.trim();

        msgDevAction(name, email, question);
        reset();
    };

    const handleError = (errors) => console.log(errors);

    const msgDevValidation = {
        name: {
            required: "Please enter your name",
            maxLength: {
                value: 140,
                message: "Please adjust your name to be less than 140 characters"
            },
            minLength: {
                value: 2,
                message: "Name input must be at least 2 characters"
            }
        },
        email: {
            required: "Please enter your email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@company.com"
            }
        },
        question: {
            required: "Please enter your question",
            maxLength: {
                value: 300,
                message: "Please adjust your question to be less than 300 characters"
            }
        }
    };

    return (
        <NavContainer>

            <NavChunk>
                <StyledNavLink to="/projects">
                    <GiBoxingGlove />
                    <LinkTitle>Projects</LinkTitle>
                </StyledNavLink>

                <StyledNavLink to="/tickets">
                    <IoTicketOutline />
                    <LinkTitle>Tickets</LinkTitle>
                </StyledNavLink>

                <StyledNavLink to="/history">
                    <VscHistory />
                    <LinkTitle>History</LinkTitle>
                </StyledNavLink>
            </NavChunk>

            <NavChunk>
                <HelpIcon onClick={() => openHelpModalAction()}>
                    <IoHelpCircleOutline />
                    <LinkTitle>Help</LinkTitle>
                </HelpIcon>

                {/* HELP MODAL */}
                < ModalContainer
                    className="yellow"
                    isOpen={showHelpModal}
                    onRequestClose={() => closeHelpModalAction()}
                    closeTimeoutMS={200}
                    contentLabel="modal"
                >
                    <ModalCircle className="yellow">
                        <IoHelpCircleOutline />
                    </ModalCircle>
                    <ModalAction>Questions?</ModalAction>
                    <ModalDetails>Contact the dev!</ModalDetails>

                    <ErrorMessage error={errorMessage} />
                    <SuccessMessage success={successMessage}/>

                    <StyledForm onSubmit={handleSubmit(handleMsgDev, handleError)}>
                        <StyledLabel
                            htmlFor="name"
                        >
                            Name
                        </StyledLabel>
                        <SolidInput
                            type="text"
                            {...register("name", msgDevValidation.name)}
                            name="name"
                            className={`yellow ${errors.name ? "error" : null}`}
                            placeholder="Enter your name"
                        />
                        {errors.name ?
                            <InlineErrorWrapper>
                                <InlineErrorIcon>
                                    <MdError />
                                </InlineErrorIcon>
                                <InlineError>{errors.name.message}</InlineError>
                            </InlineErrorWrapper>
                            : null}

                        <StyledLabel
                            htmlFor="email"
                        >
                            Email
                        </StyledLabel>
                        <SolidInput
                            type="email"
                            {...register("email", msgDevValidation.email)}
                            email="email"
                            className={`yellow ${errors.email ? "error" : null}`}
                            placeholder="Enter your email"
                        />
                        {errors.email ?
                            <InlineErrorWrapper>
                                <InlineErrorIcon>
                                    <MdError />
                                </InlineErrorIcon>
                                <InlineError>{errors.email.message}</InlineError>
                            </InlineErrorWrapper>
                            : null}

                        <StyledLabel
                            htmlFor="question"
                        >Question/Message</StyledLabel>

                        <SolidTextArea
                            type="text"
                            {...register('question', msgDevValidation.question)}
                            name="question"
                            className={`yellow ${errors.question ? "error" : null}`}
                            placeholder="Enter your question/message"
                        />
                        {errors.question ?
                            <InlineErrorWrapper>
                                <InlineErrorIcon>
                                    <MdError />
                                </InlineErrorIcon>
                                <InlineError>{errors.question.message}</InlineError>
                            </InlineErrorWrapper>
                            : null}

                        <ModalButtonContainer>
                            <Button
                                type="submit"
                                className="yellow"
                                text={"Email Tara"}
                            />
                        </ModalButtonContainer>
                    </StyledForm>

                    <ModalButtonContainer>
                        <Button
                        className="yellow secondary"
                        onClick={() => closeHelpModalAction()}
                        text={"Cancel"}
                        />
                    </ModalButtonContainer>

                </ModalContainer >

                <StyledNavLink to="/profile">
                    <VscAccount />
                    <LinkTitle>Profile</LinkTitle>
                </StyledNavLink>
            </NavChunk>

        </NavContainer>
    );
};

Navbar.propTypes = {
    openHelpModalAction: PropTypes.func,
    closeHelpModalAction: PropTypes.func,
    showHelpModal: PropTypes.bool,
    msgDevAction: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        showHelpModal: state.modalReducer.showHelpModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openHelpModalAction: openHelpModalAction,
        closeHelpModalAction: closeHelpModalAction,
        msgDevAction: msgDevAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// STYLED COMPONENTS BELOW:

const NavContainer = styled.nav`
    margin: 0;
    padding: 0;
    width: 60px;
    height: 100vh;
    float: left;
    background-color: #303134;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #551a8b;
    overflow: hidden;
    position: fixed;

    @media screen and (max-width: 540px) {
        width: 100vw;
        height: 60px;
        bottom: 0;
        flex-direction: row;
        position: fixed;
    }

    @media screen and (max-width: 320px) {
        height: 50px;
    }
`;

const NavChunk = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 250px;

    @media screen and (max-width: 540px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        max-width: 50%;
        height: 100%;
    }
`;

const StyledNavLink = styled(NavLink)`
    font-size: 1.6rem;
    text-decoration: none;
    color: #9AA0A6;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active{
        color: #A25DDC;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.3rem;
    }
`;

const LinkTitle = styled.h5`
    font-size: 0.75rem;
    font-weight: 400;
    padding: 3px;
`;

const HelpIcon = styled.div`
    font-size: 1.8rem;
    text-decoration: none;
    color: #9AA0A6;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.3rem;
    }

    :hover{
        cursor: pointer;
    }
`;