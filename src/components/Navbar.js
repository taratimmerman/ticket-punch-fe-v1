import React, { useState } from 'react';

import { GiBoxingGlove } from 'react-icons/gi';
import { IoTicketOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { VscHistory, VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalDetails,
    ModalButtonContainer
} from '../styling/ModalStyling';
import {
    SolidButton,
    OutlineButton,
} from '../styling/PageStyling';

const Navbar = () => {

    const [questionsIsOpen, setQuestionsIsOpen] = useState(false);

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
                <HelpIcon onClick={() => setQuestionsIsOpen(true)}>
                    <IoHelpCircleOutline />
                    <LinkTitle>Help</LinkTitle>
                </HelpIcon>

                <ModalContainer
                className="yellow"
                isOpen={questionsIsOpen}
                onRequestClose={() => setQuestionsIsOpen(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
                >
                    <ModalCircle className="yellow">
                        <IoHelpCircleOutline />
                    </ModalCircle>
                    <ModalAction>Questions?</ModalAction>
                    <ModalDetails>Email the dev!</ModalDetails>
                    <ModalButtonContainer>
                        <OutlineButton className="yellow restrict" onClick={() => setQuestionsIsOpen(false)}>Cancel</OutlineButton>
                        <SolidButton className="yellow restrict">Email Tara</SolidButton>
                    </ModalButtonContainer>
                </ModalContainer>

                <StyledNavLink to="/profile">
                    <VscAccount />
                    <LinkTitle>Profile</LinkTitle>
                </StyledNavLink>
            </NavChunk>

        </NavContainer>
    );
};

export default Navbar;

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