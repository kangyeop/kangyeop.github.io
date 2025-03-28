import { FC } from 'react';
import divider from '../../assets/image/divider.png';
import calendar from '../../assets/image/calendar.png';

import './weddingInfo.scss';

export const WeddingInfo: FC = () => {
  return (
    <div className="wedding_info_container">
      <img width={250} src={divider} />
      <p className="title">Save the Date</p>
      <p className="description">2025.06.15. Sun</p>
      <img width={300} src={calendar} />
    </div>
  );
};
