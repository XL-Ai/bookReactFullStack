import React, { Component } from 'react';
import uuid from 'uuid';
import List from '../List';
import CreateBar from '../CreateBar';
import ItemShowLayer from '../ItemsShowLayer';
import ItemEditor from '../ItemEditor';

import './style.scss';

export default class Deskmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectId: null,
      editing: false
    };

    this.saveItem = this.saveItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  saveItem(item) {
    this.setState(
      (prevState) => {
        let { items } = prevState;
        const selected = items.find((i) => item.id === i.id);
        if (selected) {
          selected.title = item.title;
          selected.content = item.content;
        } else {
          item.id = uuid.v4();
          item.time = new Date().getTime();
          items = [...items, item];
        }
        return {
          items,
          selectedId: item.id,
          editing: false
        };
      }
    );
  }

  selectItem(id) {
    const { selectId } = this.state;
    if (id === selectId) {
      return;
    }
    this.setState({
      selectId: id,
      editing: false
    });
  }

  createItem() {
    this.setState({
      selectId: null,
      editing: true
    });
  }

  editItem() {
    this.setState({ editing: true });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  deleteItem() {
    this.setState(
      (prevState) => {
        const { items, selectId } = prevState;
        const selectIndex = items.findIndex((item) => item.id === selectId);
        const newState = {
          items: items.splice(selectIndex, 1) && items,
          selectId: null
        };
        return newState;
      }
    );
  }

  render() {
    const { items, selectId, editing } = this.state;
    const selected = selectId && items.find((item) => item.id === selectId);

    const mainPart = editing
      ? <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit} />
      : <ItemShowLayer item={selected} onEdit={this.editItem} onDelete={this.deleteItem} />;
    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="http://#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onCreate={this.createItem} />
              <List
                items={items}
                onSelect={this.selectItem}
              />
            </div>
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}
