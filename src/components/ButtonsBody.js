import React from "react";

const ButtonsBody = () => {
  return (
    <div className="row mt-3">
      <div className="col-lg-8">
        <div className="d-flex justify-content-between">
          <div className="gap-2 d-none d-lg-flex">
            <button
              type="button"
              className="continue-shopping btn btn-sm px-4"
              data-bs-toggle="button"
              disabled
            >
              Continue Shopping
            </button>
            <button
              type="button"
              className="clear-cart btn btn-sm  px-4"
              data-bs-toggle="button"
              autocomplete="off"
            >
              Clear Shopping Cart
            </button>
          </div>
          <div className="text-end flex-grow-1">
            <button
              type="button"
              className="update-cart btn btn-lg px-4 py-3 fs-5 fw-bold w-100 d-lg-none"
              data-bs-toggle="button"
            >
              Update Shopping Cart
            </button>
            <button
              type="button"
              className="update-cart btn btn-lg px-4 d-none d-lg-inline"
              data-bs-toggle="button"
            >
              Update Shopping Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBody;
