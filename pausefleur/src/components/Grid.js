import React from "react";
import classnames from "classnames";

import Quote from "./Quote";

const Empty = () => <></>;

const determineAlign = index => {
  const justifyContent = index % 3 === 0 ? "flex-start" : (index % 3) - 2 === 0 ? "flex-end" : "center";
  return { justifyContent };
};

const Grid = ({ quote, font, index, open, mousex, mousey, ...props }) => {
  const rows = [Empty, Empty, Empty];
  const row = Math.floor(index / 3);
  rows[row] = Quote;

  const openGrid = classnames("grid", { close: !open });

  return (
    <div className={openGrid} style={{ transform: `translate3d(${mousex / 8}%, ${mousey / 8}%, 0)` }}>
      {rows.map((Row, id) => (
        <div key={id} className="row" style={id === row ? determineAlign(index) : {}}>
          <Row quote={quote} font={font} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
