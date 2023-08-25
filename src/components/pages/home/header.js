import React from "react";
import "../../../assets/css/custom.css";
import logo from "../../../assets/images/Logo.png";
import like from "../../../assets/images/like.png";
import user from "../../../assets/images/user.png";
import cart from "../../../assets/images/cart.png";
import search from "../../../assets/images/search.png";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="LOGO" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-900">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Men
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Women
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Comboes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Joggers
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <a class="navbar-brand" href="#">
                <img src={search} alt="SEARCH_ICON"  className="search-image"/>
              </a>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <a class="navbar-brand" href="#">
                <img src={like} alt="LIKE_ICON" />
              </a>
              <a class="navbar-brand" href="#">
                <img src={user} alt="USER_ICON" />
              </a>
              <a class="navbar-brand" href="#">
                <img src={cart} alt="CART_ICON" />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
