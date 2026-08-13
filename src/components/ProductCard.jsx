import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-indigo-600">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900 transition hover:text-indigo-600">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;