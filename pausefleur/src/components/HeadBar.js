import React from "react";

import EncourageTonThesard from "./logo/EncourageTonThesard";

const HeadBar = ({ openCheer }) => (
  <div className="headbar">
    <div className="title">
      <div className="logo">
        <EncourageTonThesard height="16px" width="16px" />
      </div>
      <div className="name">PauseFleur</div>
    </div>
    <div className="invite" onClick={openCheer}>
      Fleurir
    </div>
  </div>
);

export default HeadBar;
