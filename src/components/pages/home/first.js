import React from "react";
import "../../../assets/css/custom.css";
import banner from "../../../assets/images/banner.jpg";

const First = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide hero_section"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner  ">
        <div class="carousel-item active">
          <img src={process.env.PUBLIC_URL + banner} class="d-block w-100 " alt="..." />
          <div class="carousel-caption img-text text-start">
            <p className="h1 font1">T-shirt / Tops</p>
            <br />
            <p className="display-1 fw-bolder font2">Summer</p>
            <p className="display-1 fw-bolder font2">Value Pack</p>
            <br />
            <p className="h1 fw-900 font1">Cool / Colorful / Comfy</p>
            <br />
            <button className="header-btn">SHOP NOW</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev slide1"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next slide1"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default First;
