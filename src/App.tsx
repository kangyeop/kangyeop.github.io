import { FC } from 'react';
import './App.scss';
import { Main } from './components';
import { Introduction } from './components/introduction/introduction';
import { SecondSection } from './components/secondSection';
import { WeddingInfo } from './components/weddingInfo';
import { Gallery } from './components/gallery';

export const App: FC = () => {
  return (
    <div className="container">
      <div className="content">
        <Main />
        <Introduction />
        <SecondSection />
        <WeddingInfo />
        <Gallery />
      </div>
    </div>
  );
};
