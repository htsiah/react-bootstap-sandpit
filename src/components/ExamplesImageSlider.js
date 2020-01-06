import React, { useState } from "react";

/**
 * React hooks image slider example.
 * Learn how to useState (setState).
 * In this example, you learn special props - style.
 */
export function ExamplesImageSlider() {
  const ImagesData = [
    {
      id: 0,
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    },
    {
      id: 1,
      url:
        "https://pokemongohub.net/wp-content/uploads/2018/11/Pokemon-Lets-Go-696x356.jpg"
    },
    {
      id: 2,
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    }
  ];
  const [imagesIdx, setImagesIdx] = useState(0);
  const nextImage = () => {
    if (imagesIdx + 1 < ImagesData.length) {
      setImagesIdx(imagesIdx + 1);
    }
  };
  const backImage = () => {
    if (imagesIdx > 0) {
      setImagesIdx(imagesIdx - 1);
    }
  };

  return (
    <>
      <h1>React hooks image slider example</h1>
      <p>
        Learn how to useState (setState) and DOM Elements
        (https://reactjs.org/docs/dom-elements.html).
      </p>
      <hr></hr>
      <button onClick={backImage}>Back</button>
      <img
        style={{ width: 100, height: 100 }}
        src={ImagesData[imagesIdx].url}
      />
      <button onClick={nextImage}>Next</button>
    </>
  );
}
