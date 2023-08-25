import React from "react";
import "../../../assets/css/custom.css";
import pin3 from "../../../assets/images/pin.png";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
import star1 from "../../../assets/images/card1_3_start.png";
import star2 from "../../../assets/images/card2_star.png";

const Eleven = () => {
  return (
    <>
      <div className="container mt-5">
        <img src={pin3} className="d-inline-block" alt="Pin" />
        <p className="d-inline ms-5 h3 fw-bold position-absolute ">
          Feedback
        </p>
        <div className="row mt-5">
          <div className="col-xl-4 col-md-4 col-sm-12 mb-sm-2">
            <div class="card d-inline-block cards">
              <img src={card1} class="card-img-top card-imgs" alt="..." />
              <img src={star1} className="stars" alt="/" />
              <div class="card-body mt-3">
                <p class="card-title mb-0 h3">Floyd Miles</p>
                <p class="card-text mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 mb-sm-2">
            <div class="card d-inline-block cards">
              <img src={card2} class="card-img-top card-imgs" alt="..." />
              <img src={star2} className="stars" alt="/" />
              <div class="card-body mt-3">
                <p class="card-title mb-0 h3">Ronald Richards</p>
                <p class="card-text mt-4">
                  ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 mb-sm-2">
            <div class="card d-inline-block ">
              <div className="cards">
                <img
                  src={card3}
                  class="card-img-top card-imgs d-inline-block"
                  alt="..."
                />
                <img src={star1} className="stars" alt="/" />

                <div class="card-body mt-3">
                  <p class="card-title mb-0 h3">Savannah Nguyen</p>
                  <p class="card-text mt-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eleven;
