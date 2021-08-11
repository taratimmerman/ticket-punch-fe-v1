import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

export const ModalContainer = styled(Modal)`
    background-color: #202124;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    padding: 48px 56px;
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

        @media screen and (max-width: 500px) {
            height: 100vh;
            width: 100vw;
            padding: 60px 16px 0 16px;
            border-radius: 0px;
        }
`;

export const ModalCircle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
    top: -80px;
    color: #E8EAED;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

        &.red {
            background-color: #E2445C;
        }
    
        &.yellow {
            background-color: #FDAB3D;
        }

        &.green {
            background-color: #00C875;
        }

        &.purple {
            background-color: #A25DDC;
        }

        @media screen and (max-width: 500px) {
            display: none;
        }
`;

export const ModalAction = styled.h3`
    color: #E8EAED;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-height: 320px) {
        margin-bottom: 5px;
        }
`;

export const ModalItem = styled.span`
    margin: 0 8px;
    font-size: 1.3rem;
    text-align: center;

    &.red {
        color: #E2445C;
    }

    &.yellow {
        color: #FDAB3D;
    }

    &.green {
        color: #00C875;
    }

    &.purple {
        color: #A25DDC;
    }
`;

export const ModalDetails = styled.span`
    color: #888D93;
    margin: 15px;
    text-align: center;

    @media screen and (max-height: 320px) {
        margin-bottom: 5px;
        }
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 400px) {
        width: 60%;
        flex-direction: column;
        justify-content: center;
    }
`; 