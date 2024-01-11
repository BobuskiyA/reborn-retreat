import { BrowserView } from "react-device-detect";
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
import "./styles/global.scss";
import { Rules } from "./sections/Rules/Rules";
import { Questionnaire } from "./sections/Questionnaire/Questionnaire";
import { Footer } from "./components/Footer/Footer";

const hidenComponents = {
  open: {
    display: "block",
  },
  close: {
    display: "none",
  },
};

function App() {
  return (
    <>
      <BrowserView>
        <ScrollBar />
      </BrowserView>
      <main style={{ marginBottom: "30vh" }}>
        <Header />

        <Hero />
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
      </main>
    </>
  );
}

export default App;
