import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired
};

export default function ListItem({ item, onClick }) {
  let formatTime = '未知时间';
  if (item.time) {
    // eslint-disable-next-line prefer-destructuring
    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
  }
  return (
    <a
      href="http://#"
      className="list-group-item item-component"
      onClick={onClick}
    >
      <span className="label label-default label-pill pull-xs-right">
        {formatTime}
      </span>
      <span className="item-title">{item.title}</span>
    </a>
  );
}

ListItem.propTypes = propTypes;
