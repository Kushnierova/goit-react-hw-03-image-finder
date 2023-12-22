import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchText: '',
  };

  handleFormSubmit = searchText => {
    this.setState({ searchText });
  };
  render() {
    return (
      <div>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
