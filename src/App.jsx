import { Logo } from "./components/Logo/Logo";
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
    <main>
      <Logo />
      <h1 className="big-text">
        Big text
      </h1>
      <h1>
        h1 tag
      </h1>
      <h2>
        h2 tag
      </h2>
      <p>
        body text
      </p>
      <a href="/">Link</a>
    </main>
  );
}

export default App;
