import { Header } from "./components/Header/Header";
import { Discover } from "./sections/Discover/Discover";
import { Hero } from "./sections/Hero/Hero";
import { Reborn } from "./sections/Reborn/Reborn";
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
    <main style={{ marginBottom: '30vh' }}>
      <Header />
      
      <Hero />
      <Reborn />
      <Discover />
    </main>
  );
}

export default App;
