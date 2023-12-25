import React, { Component } from 'react';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { pictures } = this.props;
    return (
      <ul className={css.gallery}>
        {pictures.map(picture => (
          <li className={css.item} key={picture.id}>
            <img
              src={picture.webformatURL}
              alt={picture.tags}
              className={css.img}
              onClick={this.toggleModal}
            />

            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img
                  className={css.largeImageGalleryItem}
                  src={picture.largeImageURL}
                  alt={picture.tags}
                />
              </Modal>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGalleryItem;
