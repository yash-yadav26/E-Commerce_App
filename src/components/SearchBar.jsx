import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchTerm,
  applyFilters,
} from "../features/products/productSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const searchTerm = useSelector(
    (state) => state.products.searchTerm
  );

  useEffect(() => {
    dispatch(applyFilters());
  }, [searchTerm, dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products..."
        className="w-full rounded-xl border border-gray-300 bg-white px-12 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;