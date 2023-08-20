import { Photo } from './types';
import style from './index.module.scss';
import { useState } from 'react';

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.gallery}>
      <div className={style.galleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          currPhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={style.galleryMainPhoto}
        />
        <Navigation
          className={style.galleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.galleryPreviewList}
      />
    </div>
  );
};
