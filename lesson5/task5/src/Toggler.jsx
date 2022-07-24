import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      togglerText: 'Off',
    };
  }

  onTogglerClick = () => {
    this.setState({
      togglerText: this.state.togglerText === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.onTogglerClick}>
        {this.state.togglerText}
      </div>
    );
  }
}

export default Toggler;
