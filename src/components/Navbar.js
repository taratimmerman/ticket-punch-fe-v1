import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiBoxingGlove } from 'react-icons/gi';
import { FaTicketAlt } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
    return (
        <NavContainer>
    
                <NavChunk>
                    <NavLink exact to="/" activeStyle={link_style}>
                        <GiBoxingGlove />
                    </NavLink>

                    <NavLink to="/tickets" activeStyle={link_style}>
                        <FaTicketAlt />
                    </NavLink>

                    <NavLink to="/history" activeStyle={link_style}>
                        <FaHistory />
                    </NavLink>
                </NavChunk>

                <NavChunk>
                    <FaRegQuestionCircle />

                    <NavLink to="/profile" activeStyle={link_style}>
                        <MdAccountCircle />
                    </NavLink>
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
    background-color: #b987e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #551a8b;
    overflow: hidden;
    position: fixed;

    @media screen and (max-width: 500px) {
        width: 100vw;
        height: 60px;
        bottom: 0;
        flex-direction: row;
    }
`;

const NavChunk = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 250px;

    @media screen and (max-width: 500px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 250px;
    }
`;

const link_style = {
    color: "#fff",
    fontSize: "2.7rem",
};