import React from "react";
import "../../../assets/css/custom.css";
import pin from "../../../assets/images/pin.png";
import pik1 from "../../../assets/images/joggers.png";
import pik2 from "../../../assets/images/full_sleeve.png";
import pik3 from "../../../assets/images/active_t_shirt.png";
import pik4 from "../../../assets/images/urban_shirts.png";
import larrow from "../../../assets/images/left_arrow.png";
import rarrow from "../../../assets/images/right_arrow.png";
import Gridcomponent from "../../grid/gridcomponent";

const Third = () => {
  return (
    <>
      <div className="container mt-5">
        <img src={pin} className="d-inline-block" alt="Pin" />
        <p className="d-inline ms-5 h3 fw-bold position-absolute">
          New Arrivals
        </p>
        <div class="container text-center mt-5 gx-5">
          <img src={process.env.PUBLIC_URL + larrow} className="float-start larrow" alt="Left_Arrow" />
          <div class="row">
            <Gridcomponent imageSrc={process.env.PUBLIC_URL + pik1} altText="Joggers" title="Knitted Joggers" />
            <Gridcomponent imageSrc={process.env.PUBLIC_URL + pik2} altText="Full Sleeve" title="Full Sleeve" />
            <Gridcomponent imageSrc={process.env.PUBLIC_URL + pik3} altText="Active T-Shirts" title="Active T-Shirts" />
            <Gridcomponent imageSrc={process.env.PUBLIC_URL + pik4} altText="Urban Shirts" title="Urban Shirts" />           
          </div>
          <img src={process.env.PUBLIC_URL + rarrow} className="float-end rarrow" alt="Right_Arrow " />
        </div>
      </div>
    </>
  );
};

export default Third;