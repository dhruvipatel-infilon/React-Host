import React from "react";
import "../../../assets/css/custom.css";
import fb from "../../../assets/images/fb.png";
import insta from "../../../assets/images/insta.png";
import twiter from "../../../assets/images/twiter.png";
import linkdin from "../../../assets/images/linkdin.png";
import gp from "../../../assets/images/googleplay.png";
import ph from "../../../assets/images/phone.png";

const Footer = () => {
  return (
    <>
      <div class="container-fluid footer mt-5 ">
        <div className="container text-white">
          <footer class="py-5">
            <div class="row">
              <div class="col-6 col-md-2 mb-3">
                <p className="h5 mb-5">Need Help</p>
                <ul class="nav flex-column">
                  <li class="nav-item mb-3">Contact Us</li>
                  <li class="nav-item mb-3">Track Order</li>
                  <li class="nav-item mb-3">Returns & Refunds</li>
                  <li class="nav-item mb-3">FAQ's</li>
                  <li class="nav-item mb-3">Career</li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <p className="h5 mb-5">Section</p>
                <ul class="nav flex-column">
                  <li class="nav-item mb-3">About Us</li>
                  <li class="nav-item mb-3">euphoria Blog</li>
                  <li class="nav-item mb-3">euphoriastan</li>
                  <li class="nav-item mb-3">Collaboration</li>
                  <li class="nav-item mb-3">Media</li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <p className="h5 mb-5">More Info</p>
                <ul class="nav flex-column">
                  <li class="nav-item mb-3">Term and Condition</li>
                  <li class="nav-item mb-3">Privacy Policy</li>
                  <li class="nav-item mb-3">Shipping Policy</li>
                  <li class="nav-item mb-3">Sitemap</li>
                </ul>
              </div>

              <div class="col-md-5 offset-md-1 mb-3">
                <form>
                  <p className="h5 mb-5">Location</p>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-3">support@euphoria.in</li>
                    <li class="nav-item mb-3">
                      Eklinpura Chouraha, Ahmedabad Main Road
                    </li>
                    <li class="nav-item mb-3">
                      (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="row ">
              <div className="col-7 position-relative">
                <div className="footer-icons">
                  <img src={fb} className="m-1" alt="/" />
                  <img src={insta} className="m-1" alt="/" />
                  <img src={twiter} className="m-1" alt="/" />
                  <img src={linkdin} className="m-1" alt="/" />
                </div>
              </div>
              <div className="col-5">
                <p className="h3">Download The App </p>
                <div className="mt-4">
                  <img src={gp} className="m-1" alt="/" />
                  <img src={ph} className="m-1" alt="/" />
                </div>
              </div>
            </div>
            <div class="container">
              <hr />
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button footer-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                </div>
              </div>
              <hr />
              <p class="text-center">
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
