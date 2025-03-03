import React from "react";
import { ButtonComponent } from "./ButtonComponent";

export const PaginationComponent = ({ handlePageChange, page }) => {
  return (
    <div className="flex justify-between">
      <ButtonComponent
        btnText={"Previous"}
        btnColor={"bg-blue-500"}
        handleChange={() => handlePageChange(page - 1)}
        isDiable={page === 1}
      />
      <ButtonComponent
        btnText={"Next"}
        btnColor={"bg-blue-500"}
        handleChange={() => handlePageChange(page + 1)}
      />
    </div>
  );
};
