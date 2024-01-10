import { Header } from "./components/Header/Header";
import { Discover } from "./sections/Discover/Discover";
import { Hero } from "./sections/Hero/Hero";
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
    <main style={{ marginBottom: "30vh" }}>
      <Header />

      <Hero />
      <Reborn />
      <Discover />
      <Video />
      <Schedule />
      <Preparation />
    </main>
  );
}

export default App;