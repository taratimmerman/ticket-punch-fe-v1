import React from 'react';

import PropTypes from 'prop-types';
import { MdCheckCircle } from 'react-icons/md';
import styled from 'styled-components';

const SuccessMessage = ({success}) => {
    if (!success) {
        return null;
    }
    return (
        <SuccessContainer>
            <SuccessIcon>
                <MdCheckCircle />
            </SuccessIcon>
            <SuccessText>{ success }</SuccessText>
        </SuccessContainer>
    );
};

SuccessMessage.propTypes = {
    success: PropTypes.string
};

export default SuccessMessage;

// STYLED COMPONENTS

const SuccessContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(226, 68, 92, .6);
    color: #00C875;
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
`;

const SuccessIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 4px;
`;

const SuccessText = styled.p`
    font-size: 1rem;
    margin: 4px;
`;