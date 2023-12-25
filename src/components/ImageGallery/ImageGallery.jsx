import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { PixabayApi } from 'components/services/api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';

class ImageGallery extends Component {
  state = {
    pictures: null,
    perPage: 12,
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    // const { page } = this.state;
    const { searchText } = this.props;

    if (prevProps.searchText !== searchText) {
      this.setState({ status: 'pending' });
      this.searchImages();
    }
  }

  searchImages = async () => {
    this.setState({ status: 'pending' });
    const { searchText } = this.props;
    const { perPage } = this.state;

    try {
      const { hits, totalHits } = await PixabayApi.getImages(
        searchText,
        perPage
      );

      this.setState({
        pictures: hits,
        totalPages: Math.ceil(totalHits / perPage),
        page: 1,
        status: 'resolved',
        error: null,
      });

      if (!hits.length) {
        throw new Error(`No picture was found for "${searchText}"`);
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  };

  render() {
    const { pictures, error, status } = this.state;
    // const { searchText } = this.props;

    if (status === 'idle') {
      return (
        <p className={css.idleText}>
          Enter what exactly you are looking for in the search
        </p>
      );
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p className={css.idleText}>{error.message}</p>;
    }
    if (status === 'resolved') {
      return <ImageGalleryItem pictures={pictures} />;
    }
  }
}
export default ImageGallery;
