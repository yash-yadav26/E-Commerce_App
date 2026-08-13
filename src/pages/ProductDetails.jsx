import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(
        (state) => state.products.products
    );

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Product Not Found
                    </h1>

                    <p className="mt-3 text-gray-500">
                        The product you're looking for doesn't exist.
                    </p>

                    <Link
                        to="/products"
                        className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
                    >
                        Back to Products
                    </Link>
                </div>
            </main>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch(addToCart(product));
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <Link
                        to="/"
                        className="hover:text-indigo-600"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        to="/products"
                        className="hover:text-indigo-600"
                    >
                        Products
                    </Link>

                    <span>/</span>

                    <span className="truncate text-gray-900">
                        {product.title}
                    </span>
                </div>

                {/* Product */}
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Image Gallery */}
<div>
  {/* Main Image */}
  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
    <img
      src={product.images[selectedImage]}
      alt={`${product.title} ${selectedImage + 1}`}
      className="aspect-square w-full object-cover"
    />
  </div>

  {/* Thumbnails */}
  <div className="mt-4 grid grid-cols-3 gap-3">
    {product.images.map((image, index) => (
      <button
        key={image + index}
        onClick={() => setSelectedImage(index)}
        className={`overflow-hidden rounded-xl border-2 bg-white transition ${
          selectedImage === index
            ? "border-indigo-600"
            : "border-transparent hover:border-gray-300"
        }`}
      >
        <img
          src={image}
          alt={`${product.title} thumbnail ${index + 1}`}
          className="aspect-square w-full object-cover"
        />
      </button>
    ))}
  </div>
</div>

                    {/* Product Information */}
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            {product.category}
                        </p>

                        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <span className="text-xl text-yellow-500">
                                    ★
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-gray-400">
                                |
                            </span>

                            <span className="text-sm text-gray-500">
                                Customer Rating
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-7">
                            <span className="text-4xl font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mt-7 border-t border-gray-200 pt-7">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Description
                            </h2>

                            <p className="mt-3 leading-7 text-gray-600">
                                {product.description}
                            </p>
                        </div>

                        

                        {/* Add to Cart */}
                        <button
  onClick={() => dispatch(addToCart(product))}
  className="mt-7 w-full rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
>
  Add to Cart
</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;