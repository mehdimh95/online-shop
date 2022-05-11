import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SubHeder = () => {
  return (
      <div className="d-flex justify-content-start align-items-center gap-2 mt-3 breadcrumb">
        <span id="home">
          <a href="#?">Home</a>
        </span>
        <span className="arrow">
          <FaChevronRight />
        </span>
        <span style={{ fontSize: "12px" }}>
          Cart
        </span>
      </div>
  );
};

export default SubHeder;
