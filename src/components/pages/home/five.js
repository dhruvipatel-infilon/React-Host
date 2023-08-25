import React from "react";
import "../../../assets/css/custom.css";
import img4 from "../../../assets/images/Rectangle 77.png";
import img5 from "../../../assets/images/Rectangle 78.png";
import dark_arr1 from "../../../assets/images/arrow4.png";

const Fifth = () => {
  return (
    <>
      <div class="container text-center mt-3">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12 text">
            <div className="text1_1 text-start">
              <p className="h3 fw-bolder tx1">Urban</p>
              <p className="h3 fw-bolder tx1">Shirts</p>
              <p className="h6 fw-500 mt-4 tx2">Live in comfort</p>
              <p className="h5 fw-bold mt-3 tx3">FLAT 60% OFF</p>
              <img
                src={process.env.PUBLIC_URL + dark_arr1}
                className="d-block mt-4 bt111"
                alt="darrow"
              />
              <button className="btn btn-transparent h6  mt-2 set-width ">
                SHOP NOW
              </button>
            </div>
            <img src={process.env.PUBLIC_URL + img4} className="w-100" alt="/" />
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 text">
          <div className="text1_2 text-start">
              <p className="h3 fw-bolder tx1">Oversized</p>
              <p className="h3 fw-bolder tx1">T-Shirts</p>
              <p className="h6 fw-500 mt-4 tx2">Street Style Icon</p>
              <p className="h5 fw-bold mt-3 tx3">FLAT 60% OFF</p>
              <img
                src={dark_arr1}
                className="d-block mt-4 bt111"
                alt="darrow"
              />
              <button className="btn btn-transparent h6  mt-3 set-width ">
                SHOP NOW
              </button>
            </div>
            <img src={process.env.PUBLIC_URL + img5} className="w-100" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifth;
