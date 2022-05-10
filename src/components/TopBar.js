import React from "react";
import { ReactComponent as ChevronDown } from "../assets/icons/chevron-down.svg";
import { ReactComponent as LogoLight } from "../assets/icons/logo-white.svg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="container-fluid bg-dark text-white top-bar">
      <div className="container">
        <div className="row py-lg-1">
          <div className="col-3 d-lg-none d-flex">
            <div
              className="d-flex p-3"
              style={{
                margin: "-8px 0",
                backgroundColor: "#0156ff",
                borderRadius: 30,
                transform: "translateY(25px)",
              }}
            >
              <LogoLight
                style={{ margin: "0 3px", transform: "translateY(-4px)" }}
              />
            </div>
          </div>
          <div className="col-6 col-lg-3 p-2 flex-xl-grow-1 d-flex gap-2 time fw-bold justify-content-end justify-content-sm-center justify-content-lg-start align-items-center">
            <span style={{ color: "#A2A6B0" }}>Mon-Thu:</span>
            <span>9:15 AM - 5:30 PM</span>
            <ChevronDown style={{ filter: "brightness(10)" }} />
          </div>
          <div
            className="col-3 col-lg-6 address justify-content-center align-items-center gap-2 d-none d-sm-flex"
            style={{ color: "#ACACAC" }}
          >
            <span className="d-none d-lg-inline">
              Visit our showroom in 1234 Street Adress City Address, 1234
            </span>
            <span
              style={{ color: "#FFFFFF", fontWeight: 600 }}
              className="border-bottom"
            >
              Contact Us
            </span>
          </div>
          <div className="col-3 number d-none d-xl-flex justify-content-center fw-bold align-items-center gap-2">
            <span>Call Us : (00)123456789</span>
            <span>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="blank"
              >
                <FaInstagram style={{ color: "#FFFFFF" }} />
              </a>
            </span>
            <span>
              <a href="https://web.whatsapp.com/" target="blank">
                <FaWhatsapp style={{ color: "#FFFFFF" }} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
