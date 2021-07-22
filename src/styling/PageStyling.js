import styled from 'styled-components';

// PAGE NEUTRAL/DYNAMIC STYLED COMPONENTS:

export const PageContainer = styled.section`
    padding: 30px 30px 30px 90px;
    color: #E8EAED;
    z-index: -99;
        @media screen and (max-width: 540px) {
            padding: 30px 30px 90px 30px;
        }
        @media screen and (max-width: 320px) {
            padding: 30px 30px 70px 30px;
        }
`;

export const Greeting = styled.h1`
    font-size: 2rem;
    color: #888D93;

    @media screen and (max-width: 500px) {
            font-size: 1.8rem;
        }
    @media screen and (max-width: 360px) {
        font-size: 1.5rem;
        }
`;

export const PageTitleWrapper = styled.div`
    height: 55px;
    width: 100%;
    margin: 18px 0;
    background-color: #303134;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.h2`
    width: 100%;
    margin: 8px 15px;

    @media screen and (max-width: 500px) {
            font-size: 1.1875rem;
        }
    @media screen and (max-width: 300px) {
            font-size: 1rem;
        }
`;

// BUTTONS

export const SolidButton = styled.button`
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 140px;
    color: #E8EAED;
    font-size: 0.875rem;;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;

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

    &.gray{
        background-color: #303134;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.75rem;
        }
`;

export const OutlineButton = styled.button`
    border-radius: 8px;
    border: 2px solid;
    background-color: transparent;
    height: 40px;
    width: 140px;
    font-size: 0.875rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;
    
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

    &.gray{
        border-color: #303134;
        color: #303134;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.75rem;
        }
`;

export const ButtonWrapper = styled.div`
`;

// KANBAN CONTAINER

export const KanbanContainer = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
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

    &.archive {
        background-color: #A25DDC;
    }
`;

export const StatusTitle = styled.h3`
    font-size: 	1.25rem;
    padding: 16px;
`;

export const CardContainer = styled.div`
    margin: 16px;
`;

// FORM COMPONENTS

export const SolidInput = styled.input`
    background-color: #303134;
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 240px;
    color: #E8EAED;
    font-size: 1rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 16px;
    overflow: hidden;
    padding: 8px;
    
    :focus {
        outline: none;
    }

    :hover{
        cursor: pointer;
        opacity: 0.8;
        transition-duration: 0.3s;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledLabel = styled.label`
    color: #888D93;
    font-size: 0.8125rem;
    position: relative;
    bottom: -10px;
`;

export const SolidDropdown = styled.select`
    color: #E8EAED;
    background-color: #303134;
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 240px;
    font-size: 1rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 16px;
    overflow: hidden;
    padding: 8px;

    :focus {
        outline: none;
    }

    :hover{
        cursor: pointer;
        opacity: 0.8;
        transition-duration: 0.3s;
    }
`;

export const SolidTextArea = styled.textarea`
    color: #E8EAED;
    background-color: #303134;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 16px;
    overflow: hidden;
    padding: 8px;
    height: 80px;
    width: 240px;

    :focus {
        outline: none;
    }

    :hover{
        cursor: pointer;
        opacity: 0.8;
        transition-duration: 0.3s;
    }
`;