import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openWelcomeModalAction, closeWelcomeModalAction } from '../actions/modalActions';
import { registerUserAction } from '../actions/userActions';
import Google from '../assets/google-icon.svg';
import LinkedIn from '../assets/logo_linkedin.png';
import Slack from '../assets/logo_slack.png';
import Button from '../components/button/Button';
import ErrorMessage from '../components/ErrorMessage';
import {
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    SolidInput,
    StyledForm,
    StyledLabel,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';
import {
    WelcomeContainer,
    AppTitle,
    CTA,
    SubActionContainer,
    SubAction,
    OauthProviders,
    StyledLink
} from '../styling/WelcomeStyling';

const Welcome = ({ registerAction, openModalAction, closeModalAction, showModal, errorMessage }) => {

    useEffect(() => {
        openModalAction();
    },[]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const handleRegistration = (user) => {
        const email = user.email.trim();
        const password = user.password.trim();

        registerAction(email, password);
    };
    const handleError = (errors) => console.log(errors);

    const RegistrationValidation = {
        email: {
            required: "Please enter a valid email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@company.com"
            }
        },
        password: {
            required: "Please enter a password",
            minLength: {
                value: 6,
                message: "Passwords must be six or more characters"
            }
        }
    };

    return (
        <WelcomeContainer
            className="purple"
            isOpen={showModal}
            onRequestClose={() => closeModalAction()}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <AppTitle>Welcome to Ticket Punch</AppTitle>
            <CTA>{"Let's get started"}</CTA>

            <ErrorMessage error={errorMessage} />

            <StyledForm onSubmit={handleSubmit(handleRegistration, handleError)}>
                <StyledLabel
                    htmlFor="email"
                >Enter email</StyledLabel>

                <SolidInput
                    type="email"
                    {...register('email', RegistrationValidation.email)}
                    name="email"
                    className={`purple ${errors.email ? "error" : null}`}
                    placeholder="name@company.com"
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
                    htmlFor="password"
                >Enter password</StyledLabel>

                <SolidInput
                    type="password"
                    {...register('password', RegistrationValidation.password)}
                    name="password"
                    className={`purple ${errors.password ? "error" : null}`}
                    placeholder="Choose a password"
                />
                {errors.password ?
                    <InlineErrorWrapper>
                        <InlineErrorIcon>
                            <MdError />
                        </InlineErrorIcon>
                        <InlineError>{errors.password.message}</InlineError>
                    </InlineErrorWrapper>
                    : null}

                <ModalButtonContainer>
                    <Button
                        type="submit"
                        className="purple extended"
                        text={"Create Account"}
                    />
                </ModalButtonContainer>

            </StyledForm>

            <SubActionContainer>
                <SubAction>Or sign up with</SubAction>
                <OauthProviders>
                    <Button
                        className="darkGray oauth"
                        text={"Google"}
                        alt={"Google"}
                        oAuth={true}
                        logo={Google}
                    />

                    <Button
                        className="darkGray oauth"
                        text={"Slack"}
                        alt={"Slack"}
                        oAuth={true}
                        logo={Slack}
                    />

                    <Button
                        className="darkGray oauth"
                        text={"LinkedIn"}
                        alt={"LinkedIn"}
                        oAuth={true}
                        logo={LinkedIn}
                    />
                </OauthProviders>
            </SubActionContainer>

            <SubAction
            >Already have an account?
                <StyledLink to='/login'>Log in</StyledLink>
            </SubAction>

        </WelcomeContainer>
    );
};

Welcome.propTypes = {
    registerAction: PropTypes.func,
    openModalAction: PropTypes.func,
    closeModalAction: PropTypes.func,
    showModal: PropTypes.bool,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        showModal: state.modalReducer.showWelcomeModal,
        errorMessage: state.registrationReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerAction: registerUserAction,
        openModalAction: openWelcomeModalAction,
        closeModalAction: closeWelcomeModalAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
