import React from "react";
import { ReactComponent as Paypal } from "../assets/icons/paypal.svg";
import { ReactComponent as Zip } from "../assets/icons/zip-logo.svg";

const CardBody = ({ totalPrice = 0 }) => {
  return (
    <div
      className="col-12 col-lg-4 order-1 order-lg-2"
      style={{ paddingBottom: 15 }}
    >
      <div className="card position-sticky" style={{ top: 20 }}>
        <div className="card-body  " style={{ backgroundColor: "#F5F7FF" }}>
          <h5 className="card-title" style={{ color: "#000" }}>
            Summary
          </h5>
          <div style={{ borderBottom: "1px solid #CACDD8" }}>
            <div className="accordion" style={{ backgroundColor: "#F5F7FF" }}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#F5F7FF" }}
              >
                Estimate Shipping and Tax
              </button>

              <div
                className="accordion-collapse collapse show "
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div style={{ backgroundColor: "#F5F7FF" }} className="py-2">
                  <p style={{ color: "#000" }}>
                    <strong>
                      Enter your destination to get a shipping estimate.
                    </strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the , though the transition does limit overflow.
                  </p>
                </div>
              </div>

              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#F5F7FF" }}
              >
                Apply Discount Code
              </button>

              <div className="accordion-collapse collapse">
                <div
                  className="py-2"
                  style={{ backgroundColor: "#F5F7FF", color: "#000" }}
                >
                  <p>
                    <strong>
                      Enter your destination to get a shipping estimate.
                    </strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-4 my-3 purchase-invoice">
            <div className="d-flex justify-content-between">
              <div>Subtotal</div>
              <div>$13,047.00</div>
            </div>

            <div className="d-flex justify-content-between ">
              <div>Shipping </div>
              <div>$21.00</div>
            </div>
            <p disabled>
              (Standard Rate - Price may vary depending on the item/destination.
              TECS Staff will contact you.)
            </p>
            <div className="d-flex justify-content-between">
              <div>Tax</div>
              <div>$1.91</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>GST (10%)</div>
              <div>$1.91</div>
            </div>

            <div className="d-flex justify-content-between">
              <div>Order Total </div>
              <div style={{ fontSize: 18 }}>${totalPrice}</div>
            </div>
          </div>
          <div className="d-grid gap-2 col- mx-auto">
            <button className="btn " type="button" id="checkout">
              Proceed to Checkout
            </button>
            <button className="btn " type="button" id="check-out-with-paypal">
              <span style={{ color: "#232C65" }}>Check out with</span>
              <span>
                <Paypal />
              </span>
            </button>
            <button
              className="btn "
              type="button"
              id="check-out-with-multiple-addresses"
              disabled
            >
              Check Out with Multiple Addresses
            </button>
            <div className="d-flex gap-2">
              <Zip />
              <div
                className="d-flex align-item-center gap-1"
                style={{ fontSize: 12, color: "#272560" }}
              >
                <p className="fw-bold">own</p>{" "}
                <p>it now, up to 6 months interest free learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
