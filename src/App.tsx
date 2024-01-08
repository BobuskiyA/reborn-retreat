import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Hero from "./sections/Hero/Hero";
import "./styles/global.scss";

import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";

const hidenComponents = {
  open: {
    display: "block",
  },
  close: {
    display: "none",
  },
};

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [isShowPage, setIsShowPage] = useState(false);

  return (
    <main>
      {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
      <motion.div
        variants={hidenComponents}
        animate={loaderFinished ? "open" : "closed"}
        initial="close"
      >
        <Header />
        <Hero showPage={setIsShowPage} loaderFinished={loaderFinished} />
      </motion.div>
      <motion.div
        variants={hidenComponents}
        animate={isShowPage ? "open" : "closed"}
        initial="close"
      >
        <Root />
      </motion.div>
    </main>
  );
}

const Root = () => (
  <>
    <Footer />
  </>
);

export default App;
