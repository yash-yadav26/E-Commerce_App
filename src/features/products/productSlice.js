import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
  selectedCategory: "All",
  sortBy: "",
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    applyFilters: (state) => {
      let result = [...state.products];

      if (state.searchTerm.trim()) {
        result = result.filter((product) =>
          product.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        );
      }

      if (state.selectedCategory !== "All") {
        result = result.filter(
          (product) =>
            product.category === state.selectedCategory
        );
      }

      if (state.sortBy === "lowToHigh") {
        result.sort((a, b) => a.price - b.price);
      }

      if (state.sortBy === "highToLow") {
        result.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = result;
    },

    clearFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "All";
      state.sortBy = "";
      state.filteredProducts = state.products;
    },
  },
});

export const {
  setProducts,
  setSearchTerm,
  setCategory,
  setSortBy,
  applyFilters,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;