import React, { useState } from 'react';
import { GiBoxingGlove } from 'react-icons/gi';
import {
    WelcomeContainer,
    AppTitle,
    CTA,
    SubActionContainer,
    SubAction,
    SolidButtonLink,
    OutlineButtonLink
} from '../styling/WelcomeStyling';
import {
    ModalCircle
} from '../styling/ModalStyling';

const Welcome = () => {

    const [welcomeIsOpen, setWelcomeIsOpen] = useState(true);

    return (
        <WelcomeContainer
            className="purple"
            isOpen={welcomeIsOpen}
            onRequestClose={() => setWelcomeIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <ModalCircle className="purple">
                <GiBoxingGlove />
            </ModalCircle>
            <AppTitle>Welcome to Ticket Punch!</AppTitle>
            <CTA>{"Let's get started"}</CTA>
            <SolidButtonLink to="/login" className="purple">Log In</SolidButtonLink>
            <SolidButtonLink to="/signup" className="purple">Sign Up</SolidButtonLink>
            <SubActionContainer>
                <SubAction>Just looking around?</SubAction>
                <OutlineButtonLink to="/projects" className="purple">Continue as Guest</OutlineButtonLink>
            </SubActionContainer>
        </WelcomeContainer>
    );
};

export default Welcome;
