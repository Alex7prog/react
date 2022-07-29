import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: true,
      btnComponent: <FaChevronDown />,
    };
  }

  handleToggle = () => {
    const btnState = this.state.isHide ? <FaChevronUp /> : <FaChevronDown />;
    this.setState({
      isHide: !this.state.isHide,
      btnComponent: this.state.isHide ? <FaChevronUp /> : <FaChevronDown />,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleToggle}>
            {this.state.btnComponent}
          </button>
        </div>
        {!this.state.isHide && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
