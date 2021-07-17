import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ModalContainer = styled(Modal)`
    background-color: #202124;
    border-radius: 8px;
    margin: 30vh auto;
    width: 400px;
    padding: 0 0 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
            margin: 20vh auto;
            width: 275px;
        }

        @media screen and (max-height: 420px) {
            margin: 15vh auto;
        }

        @media screen and (max-height: 320px) {
            margin: 12vh auto;
            padding: 0;
        }
`;

export const ModalCircle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
    top: -40px;

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

    color: #E8EAED;
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalAction = styled.h3`
    color: #E8EAED;
    margin-bottom: 15px;

    @media screen and (max-height: 320px) {
        margin-bottom: 5px;
        }
`;

export const ModalDetails = styled.span`
    color: #888D93;
    margin: 15px;

    @media screen and (max-height: 320px) {
        margin-bottom: 5px;
        }
`;

export const ModalButtonContainer = styled.div`
    justify-content: space-between;
    width: 80%;
    margin: 15px;

    @media screen and (max-width: 400px) {
        width: 60%;
        flex-direction: column;
        justify-content: center;
    }
`; 