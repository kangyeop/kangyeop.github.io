import { FC } from 'react';
import './main.scss';

export const Main: FC = () => {
  return (
    <div className="main_section">
      <div className="img_container">
        <img src="/src/assets/image/main-drawing.png"></img>
      </div>
      <div className="main_footer">
        <div className="text_container">
          <p className="title">이강엽 ♥ 이주영</p>
          <p className="description">2025년 06월 15일 일요일 PM 12시 20분</p>
          <p className="description">CN천년 웨딩홀 4층 라비엔홀</p>
        </div>
      </div>
    </div>
  );
};
