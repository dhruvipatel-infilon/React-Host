import React from "react";
import piin1 from "../../../assets/images/pin.png";
import men1 from "../../../assets/images/men_1.png";
import men2 from "../../../assets/images/men_2.png";
import men3 from "../../../assets/images/men_3.png";
import men4 from "../../../assets/images/men_4.png";
import men5 from "../../../assets/images/men_5.png";
import men6 from "../../../assets/images/men_6.png";
import men7 from "../../../assets/images/men_7.png";
import men8 from "../../../assets/images/men_8.png";
import rarr1 from "../../../assets/images/right_arrow.png";
import Grid from "../../grid/grid";

const Seven = () => {
  const buttonText = "Explore Now!";

  const menItems = [
    {
      imageSrc: men1,
      altText: "Shirts",
      title: "Shirts",
    },
    {
      imageSrc: men2,
      altText: "Printed T-Shirts",
      title: "Printed T-Shirts",
    },
    {
      imageSrc: men3,
      altText: "Plain T-Shirts",
      title: "Plain T-Shirts",
    },
    {
      imageSrc: men4,
      altText: "Polo T-Shirts",
      title: "Polo T-Shirts",
    },
    {
      imageSrc: men5,
      altText: "Hoodies & Sweetshirt",
      title: "Hoodies & Sweetshirt",
    },
    {
      imageSrc: men6,
      altText: "Jeans",
      title: "Jeans",
    },
    {
      imageSrc: men7,
      altText: "Activewear",
      title: "Activewear",
    },
    {
      imageSrc: men8,
      altText: "Boxers",
      title: "Boxers",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <img src={piin1} className="d-inline-block" alt="Pin" />
        <p className="d-inline ms-5 h3 fw-bold position-absolute">
          Categories For Men
        </p>
        <div class="row mt-5">
          {menItems.map((items, index) => (
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
    </>
  );
};

export default Seven;