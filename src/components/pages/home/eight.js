import React from "react";
import pin2 from "../../../assets/images/pin.png";
import wm1 from "../../../assets/images/wm1.png";
import wm2 from "../../../assets/images/wm2.png";
import wm3 from "../../../assets/images/wm3.png";
import wm4 from "../../../assets/images/wm4.png";
import rarr1 from "../../../assets/images/right_arrow.png";
import Grid from "../../grid/grid";

const Eight = () => {
  const buttonText = "Explore Now!";

  const womenItems = [
    {
      imageSrc: wm1,
      altText: "Hoodies & Sweetshirt",
      title: "Hoodies & Sweetshirt",
    },
    {
      imageSrc: wm2,
      altText: "Coats & Parkas",
      title: "Coats & Parkas",
    },
    {
      imageSrc: wm3,
      altText: "Tees & T-Shirts",
      title: "Tees & T-Shirts",
    },
    {
      imageSrc: wm4,
      altText: "Boxers",
      title: "Boxers",
    },
  ];

  return (
    <div className="container mt-5">
      <img src={pin2} className="d-inline-block" alt="Pin" />
      <p className="d-inline ms-5 h3 fw-bold position-absolute">
        Categories For Women
      </p>
      <div class="row mt-5">
        {womenItems.map((items, index) => (
          <Grid
            key={index}
            imageSrc={items.imageSrc}
            altText={items.altText}
            title={items.title}
            buttonText={buttonText}
            rarr1={rarr1}
          />
        ))}
      </div>
    </div>
  );
};

export default Eight;
