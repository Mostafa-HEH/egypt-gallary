import React from "react";

import "./App.scss";

import Heading from "./components/Heading/Heading";
import ImagesContainer from "./components/Images-container/Images-container";
import ImagePreview from "./components/Image-preview/Image-preview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1539768942893-daf53e448371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Pyramids ,Al Ahram, Giza Governorate, Egypt",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1587975844577-56dfe5d3fca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          place: "Temple of Kom Ombo, Luxor, Egypt",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1561778498-2d8ef2ade19e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Cairo Tower, Zamalek, Egypt",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1541769740-098e80269166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          place: "The great pyramids of Giza, Cairo, Egypt",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1587582801037-d99c300033e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          place: "Taba, Taba, Egypt",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1586508577544-35c89ab0c669?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
          place: "Mosque ,Egypt",
        },
        {
          id: 7,
          url: "https://images.unsplash.com/photo-1610131042652-42d6f3754c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Citadel of Qaitbay, Alexandria, Egypt",
        },
        {
          id: 8,
          url: "https://images.unsplash.com/photo-1572422071265-8e53a20366da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80",
          place: "Mount Sinai, Saint Catherine, Egypt",
        },
        {
          id: 9,
          url: "https://images.unsplash.com/photo-1598617539575-5740d4cbb01c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Almasa hotel (elalameen), Egypt",
        },
        {
          id: 10,
          url: "https://images.unsplash.com/photo-1609254009350-e8802119df6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Aswan, Aswan, Egypt",
        },
        {
          id: 11,
          url: "https://images.unsplash.com/photo-1622604724311-1c9c9bf9976b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          place: "Nile River - Luxor, Egypt",
        },
      ],
      clickedImagePreview: null,
    };
  }

  imgClickHandler = (id) => {
    this.setState({ clickedImagePreview: id });
  };

  render() {
    const { images, clickedImagePreview } = this.state;
    return (
      <div className="App">
        <Heading />
        {images.map((img) =>
          img.id === clickedImagePreview ? (
            <ImagePreview
              imgInf={img}
              images={images}
              key={img.id}
              addToClass={"Image-preview--active"}
            />
          ) : (
            ""
          )
        )}
        <ImagesContainer
          images={images}
          imgClickHandler={this.imgClickHandler}
        />
      </div>
    );
  }
}

export default App;
