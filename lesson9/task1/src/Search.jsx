import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    // event.persist(); // событие не будет обнулятся
    // console.log('e: ', event.target.value);
    this.setState({
      value: event.target.value,
    });
  };

  search = event => {
    // отменяем дефолтное поведение формы, чтобы не перезагрузилась страница
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
