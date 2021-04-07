import React from "react";

import EncourageTonThesard from "./logo/EncourageTonThesard";

const HeadBar = ({ openCheer }) => (
  <div className="headbar">
    <div className="title">
      <div className="logo">
        <EncourageTonThesard height="16px" width="16px" />
      </div>
      <div className="name">Encourage ton Thésard</div>
      <div>Admin</div>
    </div>
    <div className="invite" onClick={openCheer}>
      Connexion
    </div>
  </div>
);

export default HeadBar;
