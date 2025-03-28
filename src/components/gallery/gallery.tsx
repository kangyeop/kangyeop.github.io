import { FC } from 'react';
import divider from '../../assets/image/divider.png';

import './gallery.scss';

export const Gallery: FC = () => {
  return (
    <div className="gallery_container">
      <img width={250} src={divider} />
      <p className="title">Gallery</p>
    </div>
  );
};
