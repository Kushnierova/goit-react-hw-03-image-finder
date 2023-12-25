import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { PixabayApi } from 'components/services/api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';

// 'idle - просто'
// 'pending - очікування'
// 'resolved - виконано успішно'
// 'rejected - відхилено(error)'

class ImageGallery extends Component {
  state = {
    pictures: null,
    perPage: 12,
    page: 1,
    error: null,
    loading: false,
    // status: 'idle',
  };

  componentDidMount() {
    this.searchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    // const { page } = this.state;
    const { searchText } = this.props;

    if (prevProps.searchText !== searchText) {
      this.searchImages();
    }
  }

  searchImages = async () => {
    this.setState({ loading: true });
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
        loading: false,
        error: null,
      });

      if (!hits.length) {
        throw new Error('No images found');
      }
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  //     const searchTag = this.state.photoTag;

  //     if (prevState.photoTag !== searchTag) {
  //       this.setState({ pictures: [] });
  //       this.fetchPhoto(searchTag, this.state.page);
  //     }
  //   }
  //   fetchPhoto = (searchTag, page) => {
  //     const data = getAllPhoto(searchTag, page);

  //     this.setState({ status: 'pending' });
  //     fetch(data)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         return Promise.reject(new Error(`Soory, something is wrong`));
  //       })
  //       .then(this.setState({ pictures: data.hits, status: 'resolved' }))

  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   };
  render() {
    const { pictures, error, loading } = this.state;
    // const { searchText } = this.props;

    return (
      pictures && (
        <>
          {loading && <Loader />}

          <ImageGalleryItem pictures={pictures} />

          {error?.message && (
            <p className={css.idleText}>{error?.message}</p>
          )}

          {/* {canLoadMore && <Button onClick={this.loadMore} title="Load more" />} */}
        </>
      )
    );
  }
}
export default ImageGallery;
