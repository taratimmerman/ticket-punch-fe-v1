import styled from 'styled-components';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

Modal.setAppElement('#root');

export const WelcomeContainer = styled(Modal)`
    background-color: #202124;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    padding: 0 8px 40px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #888D93;

        :focus {
            outline: none;
        }

        &.red {
            border-top: #E2445C solid 10px;
        }
    
        &.yellow {
            border-top: #FDAB3D solid 10px;
        }

        &.green {
            border-top: #00C875 solid 10px;
        }

        &.purple {
            border-top: #A25DDC solid 10px;
        }

        @media screen and (max-width: 400px) {
            width: 275px;
        }

        @media screen and (max-height: 320px) {
            padding: 0;
        }
`;

export const AppTitle = styled.h2`
    color: #E8EAED;
    text-align: center;
`;

export const CTA = styled.p`
    color: #888D93;
    margin-bottom: 32px;
`;

export const SubActionContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SubAction = styled.span`
    color: #888D93;
    font-size: 0.75rem;
    margin: 16px 16px 8px 16px;
`;

export const SolidButtonLink = styled(NavLink)`
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 140px;
    color: #E8EAED;
    font-size: 0.85rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;
    text-decoration: none;
    text-align: center;
    padding: 11px;

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

    @media screen and (max-width: 360px) {
        font-size: 0.70rem;
        }
`;

export const OutlineButtonLink = styled(NavLink)`
    border-radius: 8px;
    border: 2px solid;
    background-color: transparent;
    height: 40px;
    width: 140px;
    font-size: 0.85rem;
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
        font-size: 0.70rem;
        }
`;