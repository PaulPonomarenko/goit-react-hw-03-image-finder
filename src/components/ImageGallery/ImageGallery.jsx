import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
export const ImageGallry = ({ pictures, onClick }) => {
  return (
    <>
      <ul className={css.ImageGallery} onClick={onClick}>
        {pictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            webformatURL={picture.webformatURL}
            tags={picture.tags}
            largeImageURL={picture.largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};
