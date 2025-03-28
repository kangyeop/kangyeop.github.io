import { FC } from 'react';
import './introduction.scss';
import divider from '../../assets/image/divider.png';
import introduction from '../../assets/image/introduction.png';

export const Introduction: FC = () => {
  return (
    <div className="introduction_container">
      <img width={200} src={divider} />
      <img src={introduction} />
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
