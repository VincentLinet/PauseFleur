import React, { useState, useEffect } from "react";
import { getPendingMessages } from "../src/controllers/message";
import Head from "next/head";

import HeadBar from "../src/components/HeadBar";
import Footer from "../src/components/Footer";
import Picture from "../src/components/Picture";
import List from "../src/components/List";

import "../styles/design.css";

const App = ({ theme, messages }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const { picture, credit, link } = theme;

  useEffect(() => {
    setWidth(window.innerWidth / 5);
    setHeight(window.innerHeight / 5);
  }, []);

  const mouseMoveHandler = e => {
    setMouseX(e.clientX / width);
    setMouseY(e.clientY / height);
  };

  return (
    <>
      <Head>
        <title>Encourage ton Thésard - Admin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app" onMouseMove={mouseMoveHandler}>
        <HeadBar openCheer={() => setCheer(true)} />
        <Picture picture={picture} fallback={theme.picture} mousex={mouseX} mousey={mouseY} />
        <List messages={messages} />
        <Footer credit={credit} link={link} />
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  const theme = {}; // await getDailyTheme();
  const messages = await getPendingMessages();
  return { theme, messages };
};

export default App;
