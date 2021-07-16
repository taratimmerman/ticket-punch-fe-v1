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
    font-size: 2.2rem;
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

export const SolidButton = styled.button`
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 140px;
    color: #E8EAED;
    font-size: 0.85rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

    :hover{
        cursor: pointer;
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
`;

export const OutlineButton = styled.button`
    border-radius: 8px;
    border: 2px solid;
    background-color: transparent;
    height: 40px;
    width: 140px;
    font-size: 0.85rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

    :hover{
        cursor: pointer;
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
`;

// KANBAN CONTAINER

export const KanbanContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
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
`;

export const StatusTitle = styled.h3`
    padding: 16px;
`;

export const CardContainer = styled.div`
    margin: 16px;
`;