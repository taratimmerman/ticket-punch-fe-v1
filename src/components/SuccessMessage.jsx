import React from 'react';

import PropTypes from 'prop-types';

const SuccessMessage = ({ success }) => {
  if (!success) {
    return null;
  }
  return (
    <aside>
      <p>{ success }</p>
    </aside>
  );
};

SuccessMessage.propTypes = {
  success: PropTypes.string,
};

export default SuccessMessage;
