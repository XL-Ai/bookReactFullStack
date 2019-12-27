import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0
    };
    this.likedCallback = this.likedCallback.bind(this);
  }

  likedCallback() {
    this.setState((prevState) => ({ liked: prevState.liked + 1 }));
  }

  render() {
    const { name, age } = this.props;
    const { liked } = this.state;
    return (
      <div className="profile-component">
        <h1>
          {`我的名字叫 ${name}`}
        </h1>
        <h2>
          {`我今年 ${age} 岁`}
        </h2>
        <input type="button" onClick={this.likedCallback} value="给我点赞" />
        <h2>
          {`总点赞数：${liked}`}
        </h2>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
