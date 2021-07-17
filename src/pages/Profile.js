import React, { useState } from 'react';
import styled from 'styled-components';
import {
    PageTitleWrapper,
    PageTitle,
    OutlineButton,
    SolidButton
} from '../styling/PageStyling';
import { VscAccount } from 'react-icons/vsc';
import { BsPencil } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalDetails,
    ModalButtonContainer
} from '../styling/ModalStyling';

const Profile = () => {

    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    return (
        <ProfileContainer className="page">
            <PageTitleWrapper>
                <PageTitle>Profile</PageTitle>
                <OutlineButton className="purple">Log out</OutlineButton>
            </PageTitleWrapper>
            <ProfileInfoContainer>
                <VscAccount fontSize={"9rem"} />
                <Username>Guest</Username>
            </ProfileInfoContainer>
            <ProfileActionContainer>
                <ProfileActionWrapper onClick={() => setDeleteIsOpen(true)}>
                    <BsTrash />
                </ProfileActionWrapper>

                <ModalContainer
                className="red"
                isOpen={deleteIsOpen} onRequestClose={() => setDeleteIsOpen(false)}
                closeTimeoutMS={200}
                contentLabel="modal"
                >
                    <ModalCircle className="red">
                        <BsTrash />
                    </ModalCircle>
                    <ModalAction>Delete Account?</ModalAction>
                    <ModalDetails>You will permanently lose your:</ModalDetails>
                    <ul>
                        <li>Profile</li>
                        <li>Projects</li>
                        <li>Tickets</li>
                    </ul>
                    <ModalButtonContainer>
                        <OutlineButton className="red" onClick={() => setDeleteIsOpen(false)}>Cancel</OutlineButton>
                        <SolidButton className="red">Delete Account</SolidButton>
                    </ModalButtonContainer>
                </ModalContainer>

                <ProfileActionWrapper>
                    <BsPencil />
                </ProfileActionWrapper>
            </ProfileActionContainer>
        </ProfileContainer>
    );
};

export default Profile;

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