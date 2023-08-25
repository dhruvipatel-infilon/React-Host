import React from "react";
import "../../../assets/css/custom.css";
import pin from "../../../assets/images/pin.png";
import img1 from "../../../assets/images/Rectangle 74.png";
import img2 from "../../../assets/images/Rectangle 75.png";
import img3 from "../../../assets/images/Rectangle 76.png";
import darrow from "../../../assets/images/darrow.png";
import dark_darrow from "../../../assets/images/arrow4.png";

const Fourth = () => {
  return (
    <>
      <div className="container mt-5">
        <img src={pin} className="d-inline-block " alt="Pin" />
        <p className="ms-5 d-inline h3 fw-bold position-absolute">
          Big Saving Zone
        </p>
        <div class="row mt-5">
          <div class="col-xl-4 col-md-6 col-sm-6 main">
            <img src={process.env.PUBLIC_URL + img1} className="w-100" alt="/" />
            <div className="main-text text-white pt-5">
              <p className="h3 fw-bolder fon1">Hawaiian</p>
              <p className="h3 fw-bolder fon1">Shirts</p>
              <p className="h6 fw-500 fon2">Dress Up in summer vibe</p>
              <p className="h5 fw-900 mt-3 fon3">UPTO 50% OFF</p>
              <img src={process.env.PUBLIC_URL + darrow} className="d-block ps-5 mt-4" alt="darrow" />
              <button className="btn btn-transparent h6  btn22">SHOP NOW</button>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6 main">
            <img src={process.env.PUBLIC_URL + img2} className="w-100" alt="/" />
            <div className="main-text1 text-end text-white">
              <p className="text-white text-center text11">Limited Stock</p>
              <p className="h3 fw-bolder fon1">Printed</p>
              <p className="h3 fw-bolder fon1">T-Shirts</p>
              <p className="h6 fw-500 right fon2">New Designs Every Week</p>
              <p className="h5 fw-900 mt-3 fon3">UPTO 40% OFF</p>
              <img src={darrow} className="d-block  mt-4 darr1" alt="darrow" />
              <button className="btn btn-transparent h6 border border-white rounded text-white  btn333">SHOP NOW</button>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6 main">
            <img src={img3} className="w-100" alt="/" />
            <div className="main-text2 text-start">
              <p className="h3 fw-bolder fon1">Cargo</p>
              <p className="h3 fw-bolder fon1">Joggers</p>
              <p className="h6 fw-500 fon2">Move with style & comfort</p>
              <p className="h5 fw-900 mt-3 fon3">UPTO 50% OFF</p>
              <img src={process.env.PUBLIC_URL + dark_darrow} className="d-block darr2 mt-4" alt="darrow" />
              <button className="btn btn-transparent h6  mt-5 btn111 ">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
