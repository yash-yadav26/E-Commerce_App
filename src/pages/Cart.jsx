import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25a2.25 2.25 0 0 0 2.18 1.7h7.94a2.25 2.25 0 0 0 2.18-1.7l1.18-4.5H5.106m0 0L4.35 6.272M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.25 0a.75.75 0 1 1-1.5 0 .75 0 0 1-1.5 0Z"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything to your
            cart yet.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Your Cart
          </h1>

          <p className="mt-3 text-gray-400">
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Product Image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                          {item.category}
                        </p>

                        <Link
                          to={`/products/${item.id}`}
                          className="mt-1 block text-base font-semibold text-gray-900 hover:text-indigo-600 sm:text-lg"
                        >
                          {item.title}
                        </Link>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                        className="text-sm font-medium text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-lg font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                          className="px-3 py-2 text-gray-600 transition hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                          className="px-3 py-2 text-gray-600 transition hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}
                      <p className="text-sm font-semibold text-gray-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping + Clear Cart */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Link
                to="/products"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                ← Continue Shopping
              </Link>

              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm font-medium text-red-500 hover:text-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="mt-7 w-full rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Checkout functionality is not required for
              this frontend project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;