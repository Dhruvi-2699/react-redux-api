import React from "react";

export const TableCellComponent = ({ cellData }) => {
  return (
    <td className="py-2 px-4 border-b text-left text-sm font-medium text-gray-700">
      {cellData}
    </td>
  );
};
