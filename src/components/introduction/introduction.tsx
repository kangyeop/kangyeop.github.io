import { FC } from 'react';
import './introduction.scss';

export const Introduction: FC = () => {
  return (
    <div className="introduction_container">
      <img width={200} src="/src/assets/divider.png"></img>
      <img src="/src/assets/introduction.png"></img>
      <div className="information_container">
        <p>
          이기흥 <span className="dot" /> 최명숙<span className="small_size"> 아들</span> 이강엽
        </p>
        <p>
          이수윤 <span className="dot" /> 육성환<span className="small_size"> 딸</span> 이주영
        </p>
      </div>
    </div>
  );
};
