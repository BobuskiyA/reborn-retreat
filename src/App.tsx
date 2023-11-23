import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Loader from './components/Loader/Loader';
import Hero from './sections/Hero/Hero';
import './styles/global.scss';
import gsap from 'gsap'

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaderFinished(true);
    }, 8000)
  })

  return (
    <main>
      {/* {
        !loaderFinished && <Loader />
      } */}
      <Hero />
    </main>
  );
}

const Root = () => (
  <>
  </>
)

export default App;

