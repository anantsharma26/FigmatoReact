import React from "react";
import { redirect } from "react-router-dom";

function MainButton(props) {
  const { children, type } = props;

  return (
    <button
      className={
        type === "transparent"
          ? "transparent"
          : "" || type === "colored"
          ? "colored"
          : ""
      }
    >
      {children}
    </button>
  );
}

export default MainButton;
