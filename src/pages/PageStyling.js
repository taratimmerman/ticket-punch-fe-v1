import styled from 'styled-components';

// PAGE NEUTRAL/DYNAMIC STYLED COMPONENTS:

export const PageContainer = styled.section`
    padding: 30px 30px 0 100px;
    color: #E8EAED;
        @media screen and (max-width: 500px) {
            padding: 30px;
        }
`;

export const Greeting = styled.h1`
    font-size: 2.5rem;
    color: #888D93;

    @media screen and (max-width: 500px) {
            font-size: 2rem;
        }
`;

export const PageTitleWrapper = styled.div`
    height: 50px;
    width: 100%;
    margin: 18px 0;
    border-bottom: 1px #888D93 solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.h2`
    width: 100%;
`;

// BUTTONS

export const PurpleButtonPrimary = styled.button`
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 140px;
    background-color: #A25DDC;
    color: #E8EAED;
    font-size: 0.75rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

    :hover{
        background-color: darkorchid;
        cursor: pointer;
        transition: 0.5s;
    }
`;

// STATUS BAR

export const Bar = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
    height: 90%;
    margin: 16px;
    border-radius: 8px;
    
    &.stuck {
        background-color: #E2445C;
    }

    &.working-on-it {
        background-color: #FDAB3D;
    }

    &.done {
        background-color: #00C875;
    }
`;

export const StatusTitle = styled.h3`
    padding: 16px;
`;

export const CardContainer = styled.div`
    margin: 16px;
`;