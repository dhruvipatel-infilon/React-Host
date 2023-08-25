import React from "react";

const Gridcomponent = ({ imageSrc, altText, title}) => {
  return (
    <div class="col-xl-3 col-md-6 col-sm-6">
      <img src={imageSrc} className="w-100" alt={altText} />
      <p class="text-start fw-bold h6 mt-4">{title}</p>
    </div>
  );
};

export default Gridcomponent;