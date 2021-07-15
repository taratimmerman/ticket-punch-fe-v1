import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = props => {
    return (
        <CardWrapper>
            <CardTitle>{props.cardTitle}</CardTitle>
        </CardWrapper>
    );
};

Card.propTypes = {
    cardTitle: PropTypes.string
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

    :hover{
        background-color: gainsboro;
        cursor: pointer;
        transition: 0.5s;
    }
`;

const CardTitle = styled.h3`
    color: #303134;
`;