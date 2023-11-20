import FullWidthBg from '../../components/FullWidthBg/FullWidthBg';
import './Hero.scss';

import heroBack from '../../images/hero/hero_background.png';

const Hero = () => {

  return (
    <section className="hero">
      <FullWidthBg
        url={heroBack}
      >
        <h1 className="big-text">
          <span style={{ color: 'white' }}>
            crazy
          </span>
          {" "}hell
        </h1>
      </FullWidthBg>
    </section>
  );
};

export default Hero;