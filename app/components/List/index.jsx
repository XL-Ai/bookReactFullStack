import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

const propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default function List({ items, onSelect }) {
  const listItems = items.map(
    (item) => <ListItem item={item} key={item.id} onClick={() => onSelect(item.id)} />
  );

  return (
    <div className="list-component">
      {listItems}
    </div>
  );
}

List.propTypes = propTypes;
