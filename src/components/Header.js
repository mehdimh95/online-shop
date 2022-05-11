import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Search } from "../assets/icons/search-black.svg";
import { ReactComponent as Basket } from "../assets/icons/basket.svg";

const Header = ({ totalItems }) => {
  return (
    <div className="container-fluid top-header">
      <div className="container">
        <div
          className="text-dark py-3"
          style={{
            borderBottom: "1px solid rgba(202, 205, 216, 1)",
          }}
        >
          <div className="row flex-wrap">
            <div className="col-1 flex-shrink-0 me-auto order-1 d-lg-none d-flex">
              <button
                className="navbar-toggler border-0 px-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col d-none d-lg-flex justify-content-start align-items-center logo flex-shrink-1 order-1">
              <Logo />
            </div>
            <div className="col order-2 d-lg-none flex-grow-1 ms-2">
              <input
                type="text"
                className="header-search form-control border-0 rounded-pill"
                placeholder="Search here"
                required
              />
            </div>
            <div className="col-3 cart d-flex justify-content-center align-items-center gap-4 order-3">
              <Search className="d-none d-lg-inline search-icon icon" />
              <div style={{ position: "relative" }}>
                <Basket className="basket-icon icon" />
                <span className="badge rounded-circle">{totalItems}</span>
              </div>
              <img
                src="https://picsum.photos/35"
                alt="random"
                className="rounded-circle bg-secondary ms-2"
                style={{
                  minWidth: 35,
                  minHeight: 35,
                }}
              />
            </div>
            <div className="w-100 order-4 d-lg-none" />
            <div className="col-12 col-lg-8 order-5 order-lg-2 flex-grow-1">
              <nav className="navbar navbar-expand-lg navbar-light py-0 d-flex align-items-center h-100">
                <div
                  className="collapse navbar-collapse flex-grow-0"
                  id="navbarNav"
                >
                  <ul className="navbar-nav gap-2 py-2">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#?">
                        Laptops
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#?">
                        Desktop PCs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#?">
                        Networking Devices
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#?">
                        Printers & Scanners
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#?">
                        PC Parts
                      </a>
                    </li>
                    <li className="nav-item d-lg-none d-xxl-inline">
                      <a className="nav-link" aria-current="page" href="#?">
                        All Other Products
                      </a>
                    </li>
                    <li className="nav-item d-lg-none d-xxl-inline">
                      <a className="nav-link" aria-current="page" href="#?">
                        Repairs
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="d-none btn d-xl-flex justify-content-center align-items-center ms-3"
                  id="btn-our-deals"
                >
                  Our Deals
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
