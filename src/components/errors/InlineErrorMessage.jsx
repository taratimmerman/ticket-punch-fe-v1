import React from 'react';

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';

const InlineErrorMessage = ({ inlineErrorMessage }) => (
  <article>
    <div>
      <MdError />
    </div>
    <p>{inlineErrorMessage}</p>
  </article>
);

InlineErrorMessage.propTypes = {
  inlineErrorMessage: PropTypes.string,
};

export default InlineErrorMessage;
