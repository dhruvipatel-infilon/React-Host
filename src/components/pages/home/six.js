import React from "react";
import "../../../assets/css/custom.css";
import img111 from "../../../assets/images/unsplash.png";
import img222 from "../../../assets/images/Rectangle 13.png";

const Six = () => {
  return (
    <>
      <div class="container mt-5">
        <div class="row gx-0">
          <div class="col six">
            <div className="text-start six1 text-white">
                <p className="h2 fw-bolder six2">WE MADE YOUR EVERYDAY</p>
                <p className="h2 fw-bolder six2">FASHION BETTER!</p><br/>
                <p className="h5 fw-light six3">In our journey to improve evryday fashion,</p>
                <p className="h5 fw-light six3">euphoria presents EVERYDAY wear range-</p>
                <p className="h5 fw-light six3">Comfortable & Affordable fashion 24/7</p><br/>
                <button type="button" class="btn btn-light mt-2 b1">Shop Now</button>
            </div>
            <img src={process.env.PUBLIC_URL + img111} className="w-100" alt="/" />
          </div>
          <div class="col">
            <img src={process.env.PUBLIC_URL + img222} className="w-100" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Six;
