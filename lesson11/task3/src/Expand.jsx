import React from 'react';

class Expand extends React.Component {
  state = {
    isHide: true,
  };

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
              <i className="fas fa-chevron-down" />
            ) : (
              <i className="fas fa-chevron-up" />
            )}
          </button>
        </div>
        {!this.state.isHide && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
