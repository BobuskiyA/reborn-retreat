import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Loader from './components/Loader/Loader';
import Hero from './sections/Hero/Hero';
import './styles/global.scss';
import gsap from 'gsap'
import MarketPlace from './sections/MarketPlace/MarketPlace';
import Overview from './sections/Overview/Overview';
import Features from './sections/Features/Features';
import FullWidthBg from './components/FullWidthBg/FullWidthBg';

import bottomBg from './images/bottom-bg.jpg';

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [isShowPage, setIsShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaderFinished(true);
    }, 8000)
  })

  return (
    <main>
      {/* {
        !loaderFinished && <Loader />
      }
      <Hero showPage={setIsShowPage} />
      {
        isShowPage && <Root />
      } */}

      <div style={{ marginTop: '100vh' }}/>
      <Root />
    </main>
  );
}

const Root = () => (
  <>
    <Overview />
    <MarketPlace />

    <FullWidthBg
      url={bottomBg}
    >
      <Features />
    </FullWidthBg>
  </>
)

export default App;

