import { Photo, CommonClassProps } from '../types';
import cl from 'classnames';

import style from './index.module.scss';

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className,
}) => {
  return (
    <div className={cl(className, style.transitionPhoto)}>
      {prevPhoto && (
        <img
          className={style.transitionPhotoImagePrev}
          src={prevPhoto.src}
          alt={prevPhoto.alt}
        />
      )}
      <img
        className={style.transitionPhotoImage}
        src={activePhoto.src}
        alt={activePhoto.alt}
        onClick={() => console.log('suka')}
      />
      {nextPhoto && (
        <img
          className={style.transitionPhotoImageNext}
          src={nextPhoto.src}
          alt={nextPhoto.alt}
        />
      )}
    </div>
  );
};
