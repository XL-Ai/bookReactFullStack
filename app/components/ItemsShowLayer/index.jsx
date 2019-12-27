import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import './style.scss';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default function ItemShowLayer({ item, onEdit, onDelete }) {
  if (!item || !item.id) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    );
  }

  const content = marked(item.content);
  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button onClick={onEdit} type="button" className="btn btn-primary">编辑</button>
        <button onClick={onDelete} type="button" className="btn btn-danger">删除</button>
      </div>
      <h2>{item.title}</h2>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;
