import FullWidthBg from "../../components/FullWidthBg/FullWidthBg";
import "./Hero.scss";

import heroBack from "@/images/hero/hero_background.png";

const Hero = () => {
  return (
    <section className="hero">
      <FullWidthBg url={heroBack}>
        <h1 className="big-text">
          crazy<span style={{ color: "black" }}> hell</span>
        </h1>
      </FullWidthBg>
    </section>
  );
};

export default Hero;
