import { FC } from 'react';
import './secondSection.scss';
import second from '../../assets/image/second.jpg';

export const SecondSection: FC = () => {
  return (
    <div className="second_container">
      <img src={second} />
    </div>
  );
};
