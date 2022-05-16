import React from "react";

const TopFooter = () => {
  return (
    <div className="d-flex flex-column flex-lg-row align-content-center justify-content-between">
      <div className="text-center text-lg-start">
        <h2>Sign Up To Our Newsletter</h2>
        <span>Be the first to hear about the latest offers.</span>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-4 mt-4">
        <div className="flex-shrink-1 flex-grow-1">
          <input
            type="email"
            className="form-control"
            id="email-box"
            placeholder="Your Email"
          ></input>
        </div>
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#0156FF",
              borderRadius: "50px",
              width: 151,
              height: 50,
              color: "#eee",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
