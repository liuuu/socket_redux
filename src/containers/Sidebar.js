import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar" className="sidebar">
        <ul>
          {this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </aside>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Sidebar);
