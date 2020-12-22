import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  // e.target.name uses the name of the input field, in this case 'text' to setState for text
  // dynamically. This allows for reusability on other inputs
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input 
            type="text" 
            name="text" 
            placeholder="Search Users..." 
            value={this.state.text} 
            onChange={this.onChange} 
          />
          <input 
            type="submit" 
            value="Search" 
            className="btn btn-dark btn-block" 
           />
        </form>
      </div>
    );
  }
}

export default Search;
