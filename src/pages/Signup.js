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

const Signup = () => {

    const [signupIsOpen, setSignupIsOpen] = useState(true);

    return (
        <WelcomeContainer
            className="purple"
            isOpen={signupIsOpen}
            onRequestClose={() => setSignupIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <ModalCircle className="purple">
                <GiBoxingGlove />
            </ModalCircle>
            <CTA>Sign up for a Ticket Punch account</CTA>
            <StyledForm>
                <StyledLabel
                for="username"
                >Username</StyledLabel>

                <SolidInput
                type="text"
                name="username"
                placeholder="Username"
                />

                <StyledLabel
                for="password"
                >Password</StyledLabel>

                <SolidInput
                type="password"
                placeholder="Password"
                />
                <SolidButton
                type="submit"
                className="purple"
                >Sign Up</SolidButton>
            </StyledForm>
            <SubActionContainer>
                <SubAction>Already have an account?</SubAction>
                <OutlineButtonLink to="/login" className="purple">Log in</OutlineButtonLink>
            </SubActionContainer>
        </WelcomeContainer>
    );
};

export default Signup;
