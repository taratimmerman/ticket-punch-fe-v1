import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiBoxingGlove } from 'react-icons/gi';
import { IoTicketOutline } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { IoHelpCircleOutline } from 'react-icons/io5';
import { VscAccount } from 'react-icons/vsc';

const Navbar = () => {
    return (
        <NavContainer>

            <NavChunk>
                <StyledNavLink exact to="/">
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
                <ModalIcon>
                    <IoHelpCircleOutline />
                    <LinkTitle>Help</LinkTitle>
                </ModalIcon>

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
    position: sticky;

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

const ModalIcon = styled.div`
    font-size: 1.6rem;
    text-decoration: none;
    color: #9AA0A6;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 320px) {
        font-size: 1.3rem;
    }
`;