import { FC } from 'react';

import './weddingInfo.scss';

export const WeddingInfo: FC = () => {
  return (
    <div className="wedding_info_container">
      <img width={250} src="/src/assets/image/divider.png"></img>
      <p className="title">Save the Date</p>
      <p className="description">2025.06.15. Sun</p>
      <img width={300} src="/src/assets/image/calendar.png"></img>
    </div>
  );
};
