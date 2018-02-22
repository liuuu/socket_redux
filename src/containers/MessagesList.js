import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <section id="messages-list">
        <ul>{this.props.messages.map(m => <Message key={m.id} {...m} />)}</ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps)(MessageList);
