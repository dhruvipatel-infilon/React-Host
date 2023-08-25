import React from "react";
import "../../../assets/css/custom.css";
import us from "../../../assets/images/Group 46.png";
import puma from "../../../assets/images/Group 47.png";
import nike from "../../../assets/images/Group 43.png";
import hm from "../../../assets/images/Group 44.png";
import levis from "../../../assets/images/Group 45.png";

const Nine = () => {
  return (
    <>
      <div class="container mt-5 pb-5 nine rounded text-center ">
        <div class="row">
          <div class="col-xl-12 nine1 text-white mt-5">
            <p class="h1 fw-bolder mb-4">Top Brand Deals</p>
            <p className="h4 fw-light">
              Up To <span className="text-warning h4">60% </span>off on brands
            </p>
            <div class="row gx-1 mx-auto nine-row">
              <div class="col-xl-1 margin col-md-4"><img src={nike} className="rounded" alt="/" /></div>
              <div class="col-xl-1 margin col-md-4"><img src={hm} className="rounded" alt="/" /></div>
              <div class="col-xl-1 margin col-md-4"><img src={levis} className="rounded" alt="/" /></div>
              <div class="col-xl-1 margin col-md-6"><img src={us} className="rounded" alt="/" /></div>
              <div class="col-xl-1 margin col-md-6"><img src={puma} className="rounded" alt="/" /></div>
            </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Nine;
