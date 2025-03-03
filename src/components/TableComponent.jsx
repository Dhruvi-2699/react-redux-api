import React from "react";
import { TableCellComponent } from "./TableCellComponent";
import { ButtonComponent } from "./ButtonComponent";

export const TableComponent = ({ useData }) => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <TableCellComponent cellData={"ID"} />
          <TableCellComponent cellData={"Name"} />
          <TableCellComponent cellData={"UserName"} />
          <TableCellComponent cellData={"Email"} />
          <TableCellComponent cellData={"Actions"} />
        </tr>
      </thead>
      <tbody>
        {useData.map((row) => (
          <tr key={row.id} className="hover:bg-gray-100">
            <TableCellComponent cellData={row.id} />
            <TableCellComponent cellData={row.name} />
            <TableCellComponent cellData={row.username} />
            <TableCellComponent cellData={row.email} />
            <TableCellComponent
              cellData={
                <>
                  <ButtonComponent
                    btnText={"Update"}
                    btnColor={"bg-yellow-500"}
                  />
                  <ButtonComponent btnText={"Delete"} btnColor={"bg-red-500"} />
                  <ButtonComponent btnText={"View"} btnColor={"bg-green-500"} />
                </>
              }
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
