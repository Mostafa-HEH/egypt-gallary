import React from "react";

import "./Image.scss";

const Image = ({ src, spStyle }) => (
  <div className={`image ${spStyle}`}>
    <div className="image__box">
      <img src={src} alt="egypt" />
    </div>
  </div>
);

export default Image;
