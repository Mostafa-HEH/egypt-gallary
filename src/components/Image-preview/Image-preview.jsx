import React from "react";

import "./Image-preview.scss";

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();

    this.imgInf = this.props.imgInf;
    this.images = this.props.images;
    this.addToClass = this.props.addToClass;

    this.state = {
      imageInPreview: this.images.findIndex((img) => img.id === this.imgInf.id),
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.containerRef.current.classList.contains("Image-preview--active")
      ) {
        this.containerRef.current.classList.remove("Image-preview--active");
      } else return;
    });
  }

  render() {
    const { url, place } = this.images[this.state.imageInPreview];

    return (
      <div
        className={`Image-preview ${this.addToClass}`}
        ref={this.containerRef}
      >
        <i
          className="fas fa-times"
          onClick={() => {
            this.containerRef.current.classList.remove("Image-preview--active");
          }}
        ></i>
        <img src={url} className="" alt={place} />
        <p>{place}</p>
        <i
          className="fas fa-chevron-right"
          onClick={() =>
            this.state.imageInPreview !== this.images.length - 1
              ? this.setState({ imageInPreview: this.state.imageInPreview + 1 })
              : this.setState({ imageInPreview: 0 })
          }
        ></i>
        <i
          className="fas fa-chevron-left"
          onClick={() =>
            this.state.imageInPreview <= 0
              ? this.setState({ imageInPreview: 10 })
              : this.setState({ imageInPreview: this.state.imageInPreview - 1 })
          }
        ></i>
      </div>
    );
  }
}

export default ImagePreview;
