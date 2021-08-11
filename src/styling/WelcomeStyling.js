import Modal from 'react-modal';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

Modal.setAppElement('#root');

export const WelcomeContainer = styled(Modal)`
    background-color: #202124;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 500px;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #888D93;

        @media screen and (max-width: 500px) {
            height: 100vh;
            width: 100vw;
            padding: 60px 16px 0 16px;
            border-radius: 0px;
        }

        @media screen and (max-height: 320px) {
            padding: 0;
        }
`;

export const AppTitle = styled.h2`
    color: #E8EAED;
    text-align: center;
    font-size: 1.5rem;
`;

export const CTA = styled.p`
    color: #888D93;
    font-size: 1rem;
    margin-bottom: 32px;
`;

export const SubActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SubAction = styled.span`
    color: #888D93;
    font-size: 1rem;
`;

export const SolidButtonLink = styled(NavLink)`
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 100%;
    color: #E8EAED;
    font-size: 0.875rem;
    font-weight: bold;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;
    text-decoration: none;
    text-align: center;
    padding: 7px;

    :hover{
        cursor: pointer;
        opacity: 0.8;
        transition-duration: 0.3s;
    }

    &.purple{
        background-color: #A25DDC;
    }

    &.red{
        background-color: #E2445C;
    }

    &.yellow{
        background-color: #FDAB3D;
        color: #303134;
    }

    &.green{
        background-color: #00C875;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.75rem;
        }
`;

export const OutlineButtonLink = styled(NavLink)`
    border-radius: 8px;
    border: 2px solid;
    background-color: transparent;
    height: 40px;
    width: 100%;
    font-size: 0.875rem;
    font-weight: bold;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;
    text-decoration: none;
    text-align: center;
    padding: 10px;

    :hover{
        cursor: pointer;
        opacity: 0.8;
        transition-duration: 0.3s;
    }

    &.purple{
        border-color: #A25DDC;
        color: #A25DDC;
    }

    &.red{
        border-color: #E2445C;
        color: #E2445C;
    }

    &.yellow{
        border-color: #FDAB3D;
        color: #FDAB3D;
    }

    &.green{
        border-color: #00C875;
        color: #00C875;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.75rem;
        }
`;

export const OauthProviders = styled.div`
    display: flex;
    width: 100%;
    margin: 16px 0;
`;

export const OauthProvider = styled.button`
    flex-grow: 1;
    flex-basis: 0%;
    min-height: 36px;
    min-width: 32px;
    background-color: #303134;
    padding: 4px 20px;
    border-radius: 4px;
    border: none;
    transition: background .2s ease,transform 50ms;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E8EAED;
    cursor: pointer;
    margin-right: 8px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

    :hover{
        background-color: #9AA0A6;
    }

    :first-child{
        margin-left: 8px;
    }

`;

export const ProviderName = styled.span`

`;

export const OauthLogo = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 8px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #A25DDC;
    margin-left: 8px;
`;