import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { loginUserAction } from '../actions/userActions';
import Google from '../assets/google-icon.svg';
import LinkedIn from '../assets/logo_linkedin.png';
import Slack from '../assets/logo_slack.png';
import ErrorMessage from '../components/ErrorMessage';
import {
    SolidButton,
    SolidInput,
    StyledForm,
    StyledLabel,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';
import {
    WelcomeContainer,
    CTA,
    SubActionContainer,
    SubAction,
    OauthProviders,
    OauthProvider,
    ProviderName,
    OauthLogo,
    StyledLink
} from '../styling/WelcomeStyling';


const Login = ({ loginAction }) => {

    const [loginIsOpen, setLoginIsOpen] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const history = useHistory();

    const handleLogin = (user) => {
        const email = user.email.trim();
        const password = user.password.trim();

        loginAction(email, password);
        
        setLoginIsOpen(false);

        history.push('/projects');
    };
    const handleError = (errors) => console.log(errors);

    const LoginValidation = {
        email: {
            required: "Please enter your email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@company.com"
            }
        },
        password: {
            required: "Please enter your password"
        }
    };

    return (
        <WelcomeContainer
            className="purple"
            isOpen={loginIsOpen}
            onRequestClose={() => setLoginIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <CTA>Log in to your Ticket Punch account</CTA>

            <ErrorMessage />

            <StyledForm onSubmit={handleSubmit(handleLogin, handleError)}>
                <StyledLabel
                    htmlFor="email"
                >Email</StyledLabel>

                <SolidInput
                    type="email"
                    {...register('email', LoginValidation.email)}
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
                >Password</StyledLabel>

                <SolidInput
                    type="password"
                    {...register('password', LoginValidation.password)}
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

                <SolidButton
                    type="submit"
                    className="purple"
                >Sign In</SolidButton>
            </StyledForm>

            <SubActionContainer>
                <SubAction>Or sign in with</SubAction>
                <OauthProviders>
                    <OauthProvider>
                        <OauthLogo alt="Google" src={Google} />
                        <ProviderName>Google</ProviderName>
                    </OauthProvider>

                    <OauthProvider>
                        <OauthLogo alt="Slack" src={Slack} />
                        <ProviderName>Slack</ProviderName>
                    </OauthProvider>

                    <OauthProvider>
                        <OauthLogo alt="LinkedIn" src={LinkedIn} />
                        <ProviderName>LinkedIn</ProviderName>
                    </OauthProvider>
                </OauthProviders>
            </SubActionContainer>

            <SubAction
            >{"Don't have an account yet?"}
                <StyledLink to='/'>Sign up</StyledLink>
            </SubAction>
        </WelcomeContainer>
    );
};

Login.propTypes = {
    loginAction: PropTypes.func
};

const mapStateToProps = (state) => {
    return { loggingIn: state.login };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginAction: loginUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
