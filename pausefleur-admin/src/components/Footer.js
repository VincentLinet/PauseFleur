import React, { useState } from "react";
import classnames from "classnames";

import { AuthorIcon } from "./Icons";
import UnsplashLogo from "./logo/Unsplash";

const Footer = ({ credit, link, ...props }) => (
  <div className="footer">
    <div className="author">
      <AuthorIcon className="icon" height="36px" width="36px" />
      Composé par&nbsp;<b>Vincent Linet</b>
    </div>
    <div className="credit">
      Photo de <a href={`${link}&utm_source=EncourageTonThesard&utm_medium=referral`}>{credit}</a> sur{" "}
      <a className="unsplash" href="https://unsplash.com?utm_source=EncourageTonThesard&utm_medium=referral">
        <UnsplashLogo width="9px" height="9px" fill="currentColor" className="icon" />
        Unsplash
      </a>
    </div>
  </div>
);

export default Footer;
