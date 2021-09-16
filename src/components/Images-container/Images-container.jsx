import React from "react";

import "./Images-container.scss";

import Image from "../Image/Image";

const ImagesContainer = ({ images, imgClickHandler }) => (
  <div className="images-container">
    {images.map(({ id, url }) => (
      <Image
        key={id}
        src={url}
        spStyle={`for${id}`}
        id={id}
        imgClickHandler={imgClickHandler}
      />
    ))}
  </div>
);

export default ImagesContainer;
