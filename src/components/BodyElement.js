import React from "react";
import { ReactComponent as Group108 } from "../assets/icons/delete.svg";
import { ReactComponent as Group115 } from "../assets/icons/edit.svg";

const BodyElement = ({
  price,
  image,
  count = 0,
  minusHandler,
  plusHandler,
  onDelete,
  title,
}) => {
  return (
    <>
      <tr>
        <td>
          <div className="d-block d-lg-flex gap-2">
            <img
              src={image}
              alt="iphone"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        </td>
        <td className="d-none d-lg-table-cell">
          <p className="description">{title}</p>
        </td>
        <td className="price d-flex">
          {price}
        </td>
        <td>
          <div
            className="number-purchases d-flex justify-content-center align-items-center gap-2"
          >
            <div>{count}</div>
            <div className="d-grid">
              <button
                className="cart-quantity increase"
                type="button"
                style={{ border: "none", backgroundColor: "#F5F7FF" }}
                onClick={plusHandler}
              />
              <button
                className="cart-quantity"
                type="button"
                style={{ border: "none", backgroundColor: "#F5F7FF" }}
                onClick={minusHandler}
              />
            </div>
          </div>
        </td>
        <td className="subtotal text-center">
          {price}
        </td>
        <td>
          <div className="d-grid gap-2">
            <div>
              <button
                type="button"
                className="border-0 rounded-circle p-0"
                onClick={onDelete}
              >
                <Group108 />
              </button>
            </div>
            <div>
              <button type="button" className="border-0 rounded-circle p-0">
                <Group115 />
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr className="d-lg-none">
        <td colSpan={4}>
          <p className="description">{title}</p>
        </td>
      </tr>
    </>
  );
};

export default BodyElement;
