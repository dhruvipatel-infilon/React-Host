import React from "react";
import "../../../assets/css/custom.css";
import girl1 from "../../../assets/images/girl1.png";
import girl2 from "../../../assets/images/girl2.png";
import girl3 from "../../../assets/images/girl3.png";
import girl4 from "../../../assets/images/girl4.png";
import pin22 from "../../../assets/images/pin.png";
import square from "../../../assets/images/icon.png";
import Grid2 from "../../grid/grid2";

const Ten = () => {
  const timelineItems = [
    {
      imageSrc: girl1,
      altText: "Black Swaetshirt with...",
      title: "Black Swaetshirt with...",
      buttonText: "$123.00",
      Text: "Jhanvi's Brand",
    },
    {
      imageSrc: girl2,
      altText: "line Pattern Black H...",
      title: "line Pattern Black H...",
      buttonText: "$37.00",
      Text: "AS's Brand",
    },
    {
      imageSrc: girl3,
      altText: "Black Shorts",
      title: "Black Shorts",
      buttonText: "$37.00",
      Text: "MM's Brand",
    },
    {
      imageSrc: girl4,
      altText: "Levender Hoodie with...",
      title: "Levender Hoodie with...",
      buttonText: "$119.00",
      Text: "Nike's Brand",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <img src={pin22} className="d-inline-block" alt="Pin" />
        <p className="d-inline ms-5 h3 fw-bold position-absolute">
          In The Limelight
        </p>
        <div class="row mt-5 ">
          {timelineItems.map((items, index) => (
            <Grid2
              key={index}
              imageSrc={items.imageSrc}
              altText={items.altText}
              title={items.title}
              heart={square}
              buttonText={items.buttonText}
              Text={items.Text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ten;
