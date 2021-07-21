import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImBug } from "react-icons/im";
import { VscHistory } from 'react-icons/vsc';
import {
    SolidButton,
    OutlineButton,
} from '../styling/PageStyling';

const Card = props => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const card = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${card.current.scrollHeight}px`
        );
    }


    if (props.bug) {
        return (
            <CardContainer>
                <TitleWrapper
                    className={`${setActive}`}
                    onClick={toggleAccordion}
                >
                    <CardTitle>{props.title}</CardTitle>
                    <ImBug />
                </TitleWrapper>
                <ContentWrapper
                    ref={card}
                    style={{ maxHeight: `${setHeight}` }}
                    className={`${setActive}`}
                >
                    <CardProject>{props.project}</CardProject>
                    <CardDescription>{props.description}</CardDescription>
                    <CardStatus>{props.status}</CardStatus>
                    <CardButtonWrapper>
                        <OutlineButton className="gray" onClick={toggleAccordion}>Close</OutlineButton>
                        <SolidButton className="gray">Edit</SolidButton>
                    </CardButtonWrapper>
                </ContentWrapper>
            </CardContainer>
        );
    }
    if (props.archived) {
        return (
            <CardContainer>
                <TitleWrapper
                    className={`${setActive}`}
                    onClick={toggleAccordion}
                >
                    <CardTitle>{props.title}</CardTitle>
                    <VscHistory />
                </TitleWrapper>
                <ContentWrapper
                    ref={card}
                    style={{ maxHeight: `${setHeight}` }}
                    className={`${setActive}`}
                >
                    <CardProject>{props.project}</CardProject>
                    <CardDescription>{props.description}</CardDescription>
                    <CardStatus>{props.status}</CardStatus>
                    <CardButtonWrapper>
                        <OutlineButton className="gray" onClick={toggleAccordion}>Close</OutlineButton>
                    </CardButtonWrapper>
                </ContentWrapper>
            </CardContainer>
        );
    }
    return (
        <CardContainer>
            <TitleWrapper
                className={`${setActive}`}
                onClick={toggleAccordion}
            >
                <CardTitle>{props.title}</CardTitle>
            </TitleWrapper>
            <ContentWrapper
                ref={card}
                style={{ maxHeight: `${setHeight}` }}
                className={`${setActive}`}
            >
                <CardProject>{props.project}</CardProject>
                <CardDescription>{props.description}</CardDescription>
                <CardStatus>{props.status}</CardStatus>
                <CardButtonWrapper>
                    <OutlineButton className="gray" onClick={toggleAccordion}>Close</OutlineButton>
                    <SolidButton className="gray">Edit</SolidButton>
                </CardButtonWrapper>
            </ContentWrapper>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    bug: PropTypes.bool,
    archived: PropTypes.bool,
    description: PropTypes.string,
    project: PropTypes.string,
    status: PropTypes.string
};

export default Card;

// STYLED COMPONENTS:

const CardContainer = styled.div`
    color: #303134;
    z-index: 10;
`;

const TitleWrapper = styled.button`
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

const ContentWrapper = styled.div`
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

const CardTitle = styled.h4`
    font-size: 1rem;
    text-align: left;

    @media screen and (max-width: 320px) {
        font-size: 0.90rem;
    }
`;

const CardProject = styled.p`
    padding: 8px;
    font-size: 0.85rem;
    font-weight: bold;
    margin: 8px;
`;

const CardDescription = styled.p`
    padding: 8px;
    font-size: 0.85rem;
    margin: 8px;
`;

const CardStatus = styled.p`
    padding: 8px;
    font-size: 0.80rem;
    font-weight: bold;
    margin: 8px;
`;

const CardButtonWrapper = styled.div`
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;