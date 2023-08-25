import React from "react";

const Grid2 = ({ imageSrc, altText, title, heart, buttonText, Text }) => {
  return (
    <div class="col-xl-3 col-md-6 col-sm-6">
      <div className="main-img">
        <img src={imageSrc} className="w-100" alt={altText} />
        <img src={heart} className="square" alt={altText} />
        <p class="text-start fw-semibold fs-6 mt-4 mb-0 d-inline-block">
          {title}
        </p>
        <button type="button" class="btn btn-light fw-semibold float-end mt-4">
          {buttonText}
        </button>
        <p className="text-muted">{Text}</p>
      </div>
    </div>
  );
};

export default Grid2;
