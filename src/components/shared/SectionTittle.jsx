import React from "react";

const SectionTittle = ({ subHeading, Heading }) => {
  return (
    <div>
      <h3>{Heading}</h3>
      <p>{subHeading}</p>
    </div>
  );
};

export default SectionTittle;
