import React from "react";
import "bootstrap/js/src/collapse";

const ItemFooter = () => {
  return (
    <div className="footer-links mt-4">
      <div className="accordion" id="footerLinksAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="informationHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseInformation"
              aria-expanded="false"
              aria-controls="collapseInformation"
            >
              Information
            </button>
          </h2>
          <div
            id="collapseInformation"
            className="accordion-collapse collapse"
            aria-labelledby="informationHeading"
            data-bs-parent="#footerLinksAccordion"
          >
            <div className="accordion-body">
              <div className="footer-links-wrapper">
                <ul>
                  <li className="nav-item">
                    <a href="index.html">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">About Zip</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Privacy Policy</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Search</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Terms</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Orders and Returns</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Advanced Search</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Subscription</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="pcPartsHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePcParts"
              aria-expanded="false"
              aria-controls="collapsePcParts"
            >
              PC Parts
            </button>
          </h2>
          <div
            id="collapsePcParts"
            className="accordion-collapse collapse"
            aria-labelledby="pcPartsHeading"
            data-bs-parent="#footerLinksAccordion"
          >
            <div className="accordion-body">
              <div className="footer-links-wrapper">
                <ul>
                  <li className="nav-item">
                    <a href="index.html">CPUS</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Add On Cards</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Hard Drives (Internal)</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Graphic Cards</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Keyboards / Mice</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Cases / Power Supplies / Cooling</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">RAM (Memory)</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Software</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Speakers / Headsets</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Motherboards</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="desktopHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDesktop"
              aria-expanded="false"
              aria-controls="collapseDesktop"
            >
              Desktop PCs
            </button>
          </h2>
          <div
            id="collapseDesktop"
            className="accordion-collapse collapse"
            aria-labelledby="desktopHeading"
            data-bs-parent="#footerLinksAccordion"
          >
            <div className="accordion-body">
              <div className="footer-links-wrapper">
                <ul>
                  <li className="nav-item">
                    <a href="index.html">Custom PCs</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Servers</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">MSI All-In-One PCs</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">HP/Compaq PCs</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">ASUS PCs</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Tecs PCs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item d-lg-none d-xl-block">
          <h2 className="accordion-header" id="laptopsHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLaptops"
              aria-expanded="false"
              aria-controls="collapseLaptops"
            >
              Laptops
            </button>
          </h2>
          <div
            id="collapseLaptops"
            className="accordion-collapse collapse"
            aria-labelledby="laptopsHeading"
            data-bs-parent="#footerLinksAccordion"
          >
            <div className="accordion-body">
              <div className="footer-links-wrapper">
                <ul>
                  <li className="nav-item">
                    <a href="index.html">Evryday Use Notebooks</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">MSI Workstation Series</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">MSI Prestige Series</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Tablets and Pads</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Netbooks</a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html">Infinity Gaming Notebooks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="addressHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddress"
              aria-expanded="false"
              aria-controls="collapseAddress"
            >
              Address
            </button>
          </h2>
          <div
            id="collapseAddress"
            className="accordion-collapse collapse"
            aria-labelledby="addressHeading"
            data-bs-parent="#footerLinksAccordion"
          >
            <div className="accordion-body">
              <div className="footer-links-wrapper footer-address">
                <ul>
                  <li className="nav-item">
                    Address: 1234 Street Address City Address, 1234
                  </li>
                  <li className="nav-item">
                    Phones: <a href="index.html">(00) 1234 5678</a>
                  </li>
                  <li className="nav-item">
                    We are open: Monday-Thursday: 9:00 AM - 5:30 PM
                  </li>
                  <li className="nav-item">Friday: 9:00 AM - 6:00 PM</li>
                  <li className="nav-item">Saturday: 11:00 AM - 5:00 PM</li>
                  <li className="nav-item">
                    E-mail: <a href="mailto:shop@email.com">shop@email.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFooter;
