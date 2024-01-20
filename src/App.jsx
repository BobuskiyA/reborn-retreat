import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserView } from "react-device-detect";

import "./styles/global.scss";

import { Header } from "./components/Header/Header";
import { ScrollBar } from "./components/ScrollBar/ScrollBar";
import { Dates } from "./sections/Dates/Dates";
import { Discover } from "./sections/Discover/Discover";
import { Hero } from "./sections/Hero/Hero";
import { Included } from "./sections/Included/Included";
import { Preparation } from "./sections/Preparation/Preparation";
import { Reborn } from "./sections/Reborn/Reborn";
import { Schedule } from "./sections/Schedule/Schedule";
import { Video } from "./sections/Video/Video";
import { Bring } from "./sections/Bring/Bring";
import { Rules } from "./sections/Rules/Rules";
import { Questionnaire } from "./sections/Questionnaire/Questionnaire";
import { Footer } from "./components/Footer/Footer";

function App() {
  // const [loaderFinished, setLoaderFinished] = useState(false);
  // const [isShowPage, setIsShowPage] = useState(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <>
      <BrowserView>
        <AnimatePresence mode="popLayout">
          {/* {isShowPage &&  */}
            <ScrollBar />
          {/* } */}
        </AnimatePresence>
      </BrowserView>
      <main>
        {/* {isShowPage && */}
          <Header />
        {/* } */}

        <Hero
          // showPage={setIsShowPage}
        />


        {/* {isShowPage && */}
          <Root />
        {/* } */}
      </main>
    </>
  );
}

const Root = () => {
  return (
    <>
      <Reborn />
      <Discover />
      <Video />
      <Schedule />
      <Dates />
      <Included />
      <Preparation />
      <Bring />
      <Rules />
      <Questionnaire />
      <Footer />
    </>
  );
};

export default App;
