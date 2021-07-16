import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImBug } from "react-icons/im";

const Card = props => {
    if (props.bug) {
        return (
            <CardWrapper>
                <CardTitle>{props.cardTitle}</CardTitle>
                <ImBug />
            </CardWrapper>);
    }
    return (
        <CardWrapper>
            <CardTitle>{props.cardTitle}</CardTitle>
        </CardWrapper>
    );
};

Card.propTypes = {
    cardTitle: PropTypes.string,
    bug: PropTypes.boolean
};

export default Card;

// STYLED COMPONENTS:

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #E8EAED;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 8px;
    margin-bottom: 8px;
    color: #303134;

    :hover{
        background-color: gainsboro;
        cursor: pointer;
        transition: 0.5s;
    }
`;

const CardTitle = styled.h3`

`;