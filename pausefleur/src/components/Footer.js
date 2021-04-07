import React, { useState } from "react";
import classnames from "classnames";

import { AuthorIcon } from "./Icons";
import UnsplashLogo from "./logo/Unsplash";

const renderAboutMe = className => (
  <div className={className}>
    <p>
      Salut, je m'appelle Vincent, je ne suis pas doctorant, mais quelques uns de mes proches sont dans une phase de
      rédaction et je souhaite les soutenir sans aucune contrainte, et vous invite à en fait de même grâce à Encourage
      ton Thésard.
    </p>
    <p>
      J'aime utiliser ma créativité pour inventer divers genre de contenu pour le web, des sites, des illustrations et
      des logos, et surtout mettre toute cette énergie dans des petites choses qui tendent à illuminer la vie de mon
      entourage.
    </p>
    <p>
      <i>- À Amel</i>
    </p>
  </div>
);

const Footer = ({ credit, link, ...props }) => {
  const [hover, setHover] = useState(false);
  const open = classnames("about-me", { open: hover });

  const handleMouseOver = () => setHover(true);

  const handleMouseLeave = () => setHover(false);

  return (
    <div className="footer">
      {renderAboutMe(open)}
      <div className="author" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <AuthorIcon className="icon" height="36px" width="36px" />
        Composé par&nbsp;<b>Vincent Linet</b>
      </div>
      <div className="credit">
        Photo de{" "}
        <a href={`${link}?utm_source=EncourageTonThesard&utm_medium=referral`} target="_blank">
          {credit}
        </a>{" "}
        sur{" "}
        <a
          className="unsplash"
          href="https://unsplash.com?utm_source=EncourageTonThesard&utm_medium=referral"
          target="_blank"
        >
          <UnsplashLogo width="9px" height="9px" fill="currentColor" className="icon" />
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Footer;
