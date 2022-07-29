import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: true,
    };
  }

  handleToggle = () => {
    this.setState({
      isHide: !this.state.isHide,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleToggle}>
            {this.state.isHide ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
        </div>
        {!this.state.isHide && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
