import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ webformatURL, id, tags, largeImageURL }) => {
  return (
    <>
      <li className={css.ImageGalleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-src={largeImageURL}
          className={css.ImageGalleryItem__image}
        />
      </li>
    </>
  );
};
