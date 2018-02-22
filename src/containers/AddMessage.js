import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class AddMessage extends Component {
  render() {
    return (
      <section id="new-message">
        <input
          onKeyPress={e => {
            if (e.key === 'Enter') {
              // author
              this.props.dispatch(e.target.value, 'me');
              e.target.value = '';
            }
          }}
          type="text"
        />
      </section>
    );
  }
}

//

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (message, author) => dispatch(addMessage(message, author)),
  };
}

export default connect(null, mapDispatchToProps)(AddMessage);
