import styled from 'styled-components';

// CARD CONTAINERS

export const CardContainer = styled.div`
    color: #303134;
    z-index: 10;
`;

export const TitleWrapper = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #E8EAED;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 8px;
    width: 100%;

    :hover{
        opacity: 0.8;
        cursor: pointer;
        transition: 0.5s ease;
    }

    &.active {
        margin-bottom: 0px;
        box-shadow: none;
        border-radius: 8px 8px 0 0;
        opacity: 0.8;
    }
`;

export const ContentWrapper = styled.div`
    background-color: #E8EAED;
    overflow: hidden;
    transition: max-height 0.6s ease;
    width: 100%;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 8px;
    margin-bottom: 8px;

    &.active {
        border-radius: 0 0 8px 8px;
    }
`;

export const CardSectionWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

export const CardSectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 2;
`;

export const CardSectionRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;


// CARD TEXT

export const CardTitle = styled.h4`
    font-size: 1rem;
    text-align: left;

    @media screen and (max-width: 320px) {
        font-size: 0.875rem;
    }
`;

export const CardProject = styled.p`
    padding: 0 16px;
    margin: 0 8px;
    font-size: 0.875rem;
    font-weight: bold;
`;

export const CardDescription = styled.p`
    padding: 0 16px;
    margin: 0 8px;
    font-size: 0.875rem;
    font-weight: bold;
    overflow-wrap: anywhere;
`;

export const CardStatus = styled.p`
    padding: 0 16px;
    margin: 0 8px 16px 8px;
    font-size: 0.875rem;
    font-weight: bold;
`;

export const CardLabel = styled.p`
    margin: 0 8px;
    padding: 16px 16px 4px 16px;
    font-size: 	0.75rem;
`;

// CARD BUTTONS

export const CardButton = styled.button`
    border-radius: 8px;
    height: 30px;
    width: 70px;
    font-size: 0.75rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 8px;
    background-color: transparent;
    border-color: #303134;
    color: #303134;
    transition: background .2s ease,transform 50ms;
    cursor: pointer;
    
    :hover{
        background-color: #9AA0A6;
    }

`;

export const CardButtonWrapper = styled.div`
    margin: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
`;