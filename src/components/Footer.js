import React from "react";
import TopFooter from "./TopFooter";
import ItemFooter from "./ItemFooter";

const Footer = () => {
  return (
    <div
      className="container-fluid text-white"
      style={{
        backgroundColor: "#020203",
        paddingTop: 35,
        paddingBottom: 35,
      }}
    >
      <div
        className="container"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <TopFooter />
        <ItemFooter />
      </div>
    </div>
  );
};

export default Footer;
