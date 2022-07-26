import React, { Component } from 'react';
import Message from './Message';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends Component {
  // option 1
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: null,
  //   };
  // }
  // option 2 - if don't have a props
  state = {
    text: null,
  };

  setText = text => {
    this.setState({
      text: text,
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
