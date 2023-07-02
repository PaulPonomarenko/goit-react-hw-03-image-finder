import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { gallaryApi } from 'api';
import { ErrorMasage } from './ErrorMessage/ErrorMasage';
import { ImageGallry } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    inputValue: '',
    page: 1,
    pictures: [],
    error: null,
    isOpen: false,
    modalSrc: '',
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;

    if (inputValue !== prevState.inputValue) {
      try {
        this.setState({ loading: true });
        const data = await gallaryApi(inputValue, page);
        this.setState({ pictures: data.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onModalOpen = event => {
    this.setState({ isOpen: true, modalSrc: event.target.dataset.src });
    console.log(event.target);
  };
  onModalClose = () => {
    this.setState({ isOpen: false });
  };
  handleSearch = inputValue => {
    this.setState({ inputValue, modalSrc: '', isOpen: false, loading: false });
  };

  render() {
    const { error, pictures, modalSrc, isOpen, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallry pictures={pictures} onClick={this.onModalOpen} />
        <ToastContainer autoClose={3000} />
        <ErrorMasage error={error} />
        {loading && <h2>loading</h2>}
        {isOpen && <Modal modalSrc={modalSrc} onClose={this.onModalClose} />}
      </>
    );
  }
}
