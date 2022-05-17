import React from "react";
import { ReactComponent as Saving } from "../assets/icons/saving.svg";
import { ReactComponent as Account } from "../assets/icons/account.svg";
import { ReactComponent as Support } from "../assets/icons/support.svg";

const SubBody = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#F5F7FF",
        marginTop: 70,
      }}
    >
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-10">
            <div
              className="d-flex flex-column flex-lg-row justify-content-between text-center text-dark"
              style={{
                fontSize: 14,
              }}
            >
              <div className="d-grid justify-content-center gap-4 px-lg-3">
                <div>
                  <Support />
                </div>
                <div>
                  <h5>Product Support</h5>
                  <p>
                    Up to 3 years on-site warranty available for your peace of
                    mind.
                  </p>
                </div>
              </div>
              <div className="d-grid justify-content-center gap-4 my-5 my-lg-0 px-lg-3">
                <div>
                  <Account />
                </div>
                <div>
                  <h5>Personal Account</h5>
                  <p>
                    With big discounts, free delivery and a dedicated support
                    specialist.
                  </p>
                </div>
              </div>
              <div className="d-grid justify-content-center gap-4 px-lg-3">
                <div>
                  <Saving />
                </div>
                <div>
                  <h5>Amazing Savings</h5>
                  <p>
                    Up to 70% off new Products, you can be sure of the best
                    price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBody;
