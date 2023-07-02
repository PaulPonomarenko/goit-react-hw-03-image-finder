import React from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
export class Searchbar extends React.Component {
  state = {
    value: '',
  };
  handleChange = event => {
    this.setState({ value: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.info('Введіть назву!');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchForm__button}>
              <span className="button-label">Search</span>
            </button>

            <input
              className={css.SearchForm__input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
