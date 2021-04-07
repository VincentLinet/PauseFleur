import React, { useState, useEffect } from "react";
import { getDailyTheme, refreshTheme } from "../src/controllers/theme";
import Head from "next/head";
import classnames from "classnames";

import HeadBar from "../src/components/HeadBar";
import Footer from "../src/components/Footer";
import Picture from "../src/components/Picture";
import Refresh from "../src/components/Refresh";
import Cheer from "../src/components/Cheer";
import Grid from "../src/components/Grid";

import "../styles/design.css";

const App = ({ theme }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cheer, setCheer] = useState(false);
  const [ephemere, setEphemere] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [used, setUsed] = useState(theme);
  const [preload, setPreload] = useState(true);
  const { picture, message, font, location, credit, link } = used;

  const app = classnames("app", { preload });

  useEffect(() => {
    setWidth(window.innerWidth / 5);
    setHeight(window.innerHeight / 5);
    setPreload(false);
  }, []);

  useEffect(() => {
    ephemere && setUsed(ephemere);
  }, [ephemere]);

  const mouseMoveHandler = (e) => {
    setMouseX(e.clientX / width);
    setMouseY(e.clientY / height);
  };

  const refresh = async () => {
    const ephemere = await refreshTheme();
    setEphemere(ephemere);
  };

  return (
    <>
      <Head>
        <title>PauseFleur</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={app} onMouseMove={mouseMoveHandler}>
        <HeadBar openCheer={() => setCheer(true)} />
        <Picture picture={picture} fallback={theme.picture} mousex={mouseX} mousey={mouseY} />
        <Cheer open={cheer} closeCheer={() => setCheer(false)} />
        <Grid quote={message} font={font} index={location} open={!cheer} mousex={mouseX} mousey={mouseY} />
        <Refresh onClick={refresh} />
        <Footer credit={credit} link={link} />
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  const theme = await getDailyTheme();
  return { theme };
};

export default App;
