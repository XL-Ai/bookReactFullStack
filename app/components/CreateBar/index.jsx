import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default function CreateBar({ onCreate }) {
  return (
    <button type="button" onClick={onCreate} className="list-group-item create-bar-component">
      + 创建新的文章
    </button>
  );
}

CreateBar.propTypes = propTypes;
