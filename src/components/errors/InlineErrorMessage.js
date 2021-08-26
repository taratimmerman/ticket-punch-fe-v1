import React from 'react';

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';
import styled from 'styled-components';

const InlineErrorMessage = props => {
    return (
        <InlineErrorWrapper>
            <InlineErrorIcon>
                <MdError />
            </InlineErrorIcon>
            <InlineError>{props.inlineErrorMessage}</InlineError>
        </InlineErrorWrapper>
    );
};

InlineErrorMessage.propTypes = {
    inlineErrorMessage: PropTypes.string
};

export default InlineErrorMessage;

// STYLED COMPONENTS:

const InlineErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E2445C;
    position: relative;
    top: -10px;
`;

const InlineErrorIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px 0 0;
`;

const InlineError = styled.small`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;