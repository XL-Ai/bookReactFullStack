import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};
const defaultProps = { item: null };

export default class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = null;
    this.contentInput = null;
  }

  render() {
    const { onSave, onCancel } = this.props;
    let { item } = this.props;
    item = item || { title: '', content: '' };
    const saveText = item.id ? 'Save' : 'Create';

    const save = () => {
      item.title = this.titleInput.value;
      item.content = this.contentInput.value;
      onSave(item);
    };

    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={save} type="button" className="btn btn-success">{saveText}</button>
          <button onClick={onCancel} type="button" className="btn secondary">取消</button>
        </div>
        <div className="edit-area">
          <input ref={(c) => { this.titleInput = c; }} placeholder="请填写标题" defaultValue={item.title} />
          <input ref={(c) => { this.contentInput = c; }} placeholder="请填写内容" defaultValue={item.content} />
        </div>
      </div>
    );
  }
}

ItemEditor.propTypes = propTypes;
ItemEditor.defaultProps = defaultProps;
