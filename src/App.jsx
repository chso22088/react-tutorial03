import React, { useState } from 'react';

const images = [
  {
    src: 'images/pic1.jpg',
    alt: 'Closeup of a human eye',
  },
  {
    src: 'images/pic2.jpg',
    alt: 'Rock that looks like a wave',
  },
  {
    src: 'images/pic3.jpg',
    alt: 'Purple and white pansies',
  },
  {
    src: 'images/pic4.jpg',
    alt: "Section of wall from a pharaoh's tomb",
  },
  {
    src: 'images/pic5.jpg',
    alt: 'Large moth on a leaf',
  },
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isDarkened, setIsDarkned] = useState(false);

  function handleThumbnailClick (index) {
    setSelectedImage(images[index]);
    setIsDarkned(false);
  };

  function handleDarkenButtonClick() {
    setIsDarkned(!isDarkened);
  }

  const overlayStyle = {
    backgroundColor: isDarkened ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'
  };

  const buttonLabel = isDarkened ? 'Lighten' : 'Darken';

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
        <div className="overlay" style={overlayStyle}></div>
        <button className="dark" onClick={handleDarkenButtonClick}>
          {buttonLabel}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </>
  );
}