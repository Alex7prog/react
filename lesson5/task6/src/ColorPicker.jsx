import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorText: '',
    };
  }

  // getColorElem = classElem => {
  //   const posStart = classElem.lastIndexOf('_') + 1;

  //   return classElem[posStart].toUpperCase() + classElem.substring(posStart + 1, classElem.length);
  // };

  // setTitleText = e => {
  //   if (e.target.classList.contains('picker__button')) {
  //     this.setState({
  //       colorText: this.getColorElem(e.target.className),
  //     });
  //   }
  // };

  setTitleText = color => {
    this.setState({
      colorText: color,
    });
  };

  setTitleClear = () => {
    this.setState({
      colorText: '',
    });
  };

  render() {
    return (
      // <div onMouseOver={this.setTitleText} onMouseOut={this.setTitleClear}>
      <div>
        <div className="picker__title">{this.state.colorText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setTitleText('Coral')}
            onMouseOut={this.setTitleClear}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setTitleText('Aqua')}
            onMouseOut={this.setTitleClear}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setTitleText('Bisque')}
            onMouseOut={this.setTitleClear}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
