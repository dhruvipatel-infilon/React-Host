import React from "react";
import "../../../assets/css/custom.css";
import img1 from "../../../assets/images/sec_pg_1.jpg";
import img2 from "../../../assets/images/sec_pg_2.jpg";

const Second = () => {
  return (
    <>
      <div class="container text-center mt-5 pt-3">
        <div class="row row-cols-2 gy-0 ">
          <div class="col-xl-6 col-sm-12 col-md-12 col-lg-6  main-class">
            <img
              src={process.env.PUBLIC_URL + img1}
              className="w-100 "
              alt="background-image"
            />
            <div className=" text-start ps-5 text1 text-white">
              <p className="h3 mt-5 fw-bold sec-tx1">Low Price</p>
              <p className="h1 fw-bolder sec-tx2">High Coziness</p><br/>
              <p className="h4 fw-500 sec-tx3">UP TO 50% OFF</p>
              <p className="h3 mt-3 fw-bold sec-tx4">Explore Items</p>
              <hr className="hr-1 " />
            </div>
          </div>
          <div class="col-xl-6 col-sm-12 col-md-12 col-lg-6 main-class1">
            <img
              src={process.env.PUBLIC_URL + img2}
              className="w-100 "
              alt="background-image"
            />
            <div className="text-start text-white ps-5 text2">
              <p className="h3 mt-5 fw-bold sec-tx1">Beyoung Present</p>
              <p className="h1 fw-bolder sec-tx2">Brezzy Summer</p>
              <div className="text3">
                <p className="h1 fw-bolder  sec-tx2">style</p><br/>
                <p className="h4 fw-500 sec-tx3">UP TO 50% OFF</p>
                <p className="h3 mt-3 fw-bold sec-tx4">Explore Items</p>
                <hr className="hr-1 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
