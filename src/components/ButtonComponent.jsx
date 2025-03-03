import React from "react";

export const ButtonComponent = ({
  btnText,
  btnColor,
  handleChange,
  isDiable,
}) => {
  return (
    <button
      disabled={isDiable}
      onClick={handleChange}
      className={`text-white rounded p-2 m-1 ${btnColor} ${
        isDiable ? "default" : "cursor-pointer"
      }`}
    >
      {btnText}
    </button>
  );
};
