import React, { useState } from 'react';
import { GiBoxingGlove } from 'react-icons/gi';
import {
    WelcomeContainer,
    CTA,
    SubActionContainer,
    SubAction,
    OutlineButtonLink
} from '../styling/WelcomeStyling';
import {
    ModalCircle
} from '../styling/ModalStyling';
import {
    SolidButton,
    SolidInput,
    StyledForm,
    StyledLabel
} from '../styling/PageStyling';

const Login = () => {

    const [loginIsOpen, setLoginIsOpen] = useState(true);

    return (
        <WelcomeContainer
            className="purple"
            isOpen={loginIsOpen}
            onRequestClose={() => setLoginIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <ModalCircle className="purple">
                <GiBoxingGlove />
            </ModalCircle>
            <CTA>Login to your Ticket Punch account</CTA>
            <StyledForm>
                <StyledLabel
                htmlFor="username"
                >Username</StyledLabel>

                <SolidInput
                type="text"
                name="username"
                placeholder="Username"
                />

                <StyledLabel
                htmlFor="password"
                >Password</StyledLabel>

                <SolidInput
                type="password"
                placeholder="Password"
                />
                <SolidButton
                type="submit"
                className="purple"
                >Log In</SolidButton>
            </StyledForm>
            <SubActionContainer>
                <SubAction>Need an account?</SubAction>
                <OutlineButtonLink to="/signup" className="purple">Sign Up</OutlineButtonLink>
            </SubActionContainer>
        </WelcomeContainer>
    );
};

export default Login;
