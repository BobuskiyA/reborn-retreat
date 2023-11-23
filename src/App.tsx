import Loader from "./components/Loader/Loader";
import Hero from "./sections/Hero/Hero";
import MarketPlace from "./sections/MarketPlace/MarketPlace";
import "./styles/global.scss";

function App() {
  return (
    <main className="App">
      {/* <Loader /> */}
      <Hero />
      <MarketPlace />
    </main>
  );
}

export default App;
