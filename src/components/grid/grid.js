import React from "react";

const Grid = ({ imageSrc, altText, title, rarr1 , buttonText}) => {
  return (
    <div class="col-xl-3 col-md-6 col-sm-6">
      <img src={imageSrc} className="w-100" alt={altText} />
      <p class="text-start fw-bold h6 mt-4 mb-0 d-inline-block">{title}</p>
      <img src={rarr1} className="float-end mt-4" alt={altText} />
      <p className="text-muted">{buttonText}</p>
    </div>
  );
};

export default Grid;
