import React from "react";

import "./Image.scss";

const Image = ({ src, spStyle, id, imgClickHandler }) => (
  <div
    className={`image ${spStyle}`}
    onClick={imgClickHandler.bind(this, id)}
    key={id}
  >
    <div className="image__box">
      <img src={src} alt="egypt" />
    </div>
  </div>
);

export default Image;
