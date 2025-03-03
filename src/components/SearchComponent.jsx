import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchComponent = ({ onSearch, searchTerm }) => {
  return (
    <div className="relative">
      <input
        className="bg-gray-100 my-2 rounded pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search users..."
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch />
      </div>
    </div>
  );
};
