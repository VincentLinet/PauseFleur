import React from "react";

const determineAlign = index => {
  const aligns = ["flex-start", "center", "flex-end"];
  const alignItems = aligns[Math.floor(index / 3)];
  return { alignItems };
};

const Quote = ({ quote, font, index, ...props }) => (
  <div className="quote" style={{ fontFamily: font, ...determineAlign(index) }}>
    {quote}
  </div>
);

export default Quote;
