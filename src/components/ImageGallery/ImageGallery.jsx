import React, { Component } from 'react';
import css from './ImageGallery.module.css';
// import { fetchPhotosByKeyword } from '/Kateryna/GoIT/goit-react-hw-03-image-finder/src/services/api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';

// 'idle - просто'
// 'pending - очікування'
// 'resolved - виконано успішно'
// 'rejected - відхилено(error)'

class ImageGallery extends Component {
  state = {
    pictures: [],
    pageNum: 1,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchText;
    const nextName = this.props.searchText;
    const { pageNum } = this.state;

    if (prevName !== nextName) {

      this.setState({ status: 'pending' });
        fetch('https://pixabay.com/api/')
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`Soory, something is wrong`));
          })
          .then(pictures =>
            this.setState({
              pictures:
                pageNum === 1 ? pictures : [...prevState.pictures, ...pictures],
              status: 'resolved',
            })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { pictures, status, error } = this.state;
    const { searchText } = this.props;

    if (status === 'idle') {
      return <p className={css.idleText}>Please, write search</p>;
    }

    if (status === 'pending') {
      return <Loader searchText={searchText} />;
    }

    if (status === 'rejected') {
      <div role="alert">
        <h2>{error.message}</h2>
      </div>;
    }

    if (status === 'resolved') {
      return (
        <ul className={css.gallery}>
          <ImageGalleryItem pictures={pictures} />
        </ul>
      );
    }
  }
}
export default ImageGallery;
