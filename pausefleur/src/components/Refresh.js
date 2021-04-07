import React from "react";

import { RefreshIcon } from "./Icons";

const Refresh = ({ onClick, ...props }) => (
  <div className="refresh" onClick={onClick}>
    <div className="refresh__title">
      <div className="refresh__shift">Plus d'encouragements</div>
    </div>
    <RefreshIcon className="refresh__icon" />
  </div>
);

export default Refresh;
