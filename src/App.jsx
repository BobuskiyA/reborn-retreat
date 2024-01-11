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
import "./styles/global.scss";

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
      </main>
    </>
  );
}

export default App;
