import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ pictures }) {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <li className={css.item} key={picture.id}>
          <img
            src={picture.webformatURL}
            alt={picture.tags}
            className={css.img}
          />
        </li>
      ))}
    </ul>
  );
}
export default ImageGalleryItem;
