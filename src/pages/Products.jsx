import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

import products from "../data/products";

import {
  setProducts,
  setCategory,
  setSortBy,
  applyFilters,
  clearFilters,
} from "../features/products/productSlice";

function Products() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
const categoryFromUrl = searchParams.get("category");

  const {
    filteredProducts,
    selectedCategory,
    sortBy,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (filteredProducts.length === 0) {
      dispatch(setProducts(products));
    }
  }, [dispatch, filteredProducts.length]);

  useEffect(() => {
  dispatch(applyFilters());
}, [
  dispatch,
  selectedCategory,
  sortBy,
]);


useEffect(() => {
  if (
    categoryFromUrl &&
    ["Electronics", "Fashion", "Accessories"].includes(
      categoryFromUrl
    )
  ) {
    dispatch(setCategory(categoryFromUrl));
  }
}, [categoryFromUrl, dispatch]);

  const handleCategoryChange = (e) => {
  dispatch(setCategory(e.target.value));
};

  const handleSortChange = (e) => {
  dispatch(setSortBy(e.target.value));
};

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Our Collection
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Shop Products
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Discover our collection of quality products
            designed for your everyday needs.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
  {/* Search */}
  <SearchBar />

  {/* Category */}
  <select
    value={selectedCategory}
    onChange={handleCategoryChange}
    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
  >
    <option value="All">All Categories</option>

    <option value="Electronics">Electronics</option>

    <option value="Fashion">Fashion</option>

    <option value="Accessories">Accessories</option>
  </select>

  {/* Sort */}
  <select
    value={sortBy}
    onChange={handleSortChange}
    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
  >
    <option value="">Sort By</option>

    <option value="lowToHigh">
      Price: Low to High
    </option>

    <option value="highToLow">
      Price: High to Low
    </option>
  </select>

  {/* Clear Filters */}
  <button
  onClick={() => {
    dispatch(clearFilters());
    setSearchParams({});
  }}
  className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
>
  Clear Filters
</button>
</div>

        {/* Product Count */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;