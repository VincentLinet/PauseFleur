import React, { useState } from "react";
import classnames from "classnames";

import { FlowerIcon } from "./Icons";
import UnsplashLogo from "./logo/Unsplash";

const renderDescription = (className) => (
  <div className={className}>
    <p>
      Salut, la période n'est pas facile et malgré tout le soutien moral de notre cher Ponce, il n'est pas toujours
      évident de se mettre au boulot quand on a une lourde charge de travail.
    </p>
    <p>
      On espère donc avec quelques jolies images florales et quelques sourires animaliers vous transmettre la bonne
      humeur et le courage dont vous aurez besoin pour avancer dans vos projets autant professionnels que dans votre vie
      quotidienne. Des bisous !
    </p>
    <p>
      <i>- Pour les belles fleurs de Ponpon</i>
    </p>
  </div>
);

const Footer = ({ credit, link, ...props }) => {
  const [hover, setHover] = useState(false);
  const open = classnames("description", { open: hover });

  const handleMouseOver = () => setHover(true);

  const handleMouseLeave = () => setHover(false);

  return (
    <div className="footer">
      {renderDescription(open)}
      <div className="author" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <FlowerIcon className="icon" height="36px" width="36px" color="#FFFFFF" />
        Composé par&nbsp;<b>des fleurs</b>&nbsp;pour&nbsp;<b>des fleurs</b>
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
