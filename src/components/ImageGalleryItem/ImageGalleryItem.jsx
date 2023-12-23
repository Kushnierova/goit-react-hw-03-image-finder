import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = pictures => {
  return pictures.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li className={css.item} key={id}>
        <img src={webformatURL} alt="img" data-large={largeImageURL} className={css.img} />
      </li>
    );
  });
};
export default ImageGalleryItem;
