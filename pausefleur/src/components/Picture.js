import React from "react";

const Picture = ({ picture, credit, mousex, mousey, ...props }) => {
  return (
    <div
      className="picture"
      style={{ backgroundImage: `url(${picture})`, transform: `translate3d(-${mousex / 5}%, -${mousey / 5}%, 0)` }}
    />
  );
};

export default Picture;
