import React, { Component } from 'react';
import css from './Searchbar.module.css'
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <div className={css.searchbar}>
        <form className={css.searchForm}>
            <label htmlFor="">
                            <button className={css.btn}><ImSearch style={{ marginRight: 8 }} /></button>
            </label>

          <input />
        </form>
      </div>
    );
  }
}

export default Searchbar;
