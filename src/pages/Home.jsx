import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { setProducts } from "../features/products/productSlice";

function Home() {
  const dispatch = useDispatch();

  const productList = useSelector(
    (state) => state.products.products
  );

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(setProducts(products));
    }
  }, [dispatch, productList.length]);

  const featuredProducts = productList.slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          
          <div>
            <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
              New Collection
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Discover products you'll{" "}
              <span className="text-indigo-500">
                love.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Shop the latest products with great quality,
              modern design and prices you'll love.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
                alt="Shopping collection"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Our Picks
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-gray-600">
              Explore some of our most popular products.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/products"
            className="font-semibold text-indigo-600"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Shop By
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Categories
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {["Electronics", "Fashion", "Accessories"].map(
              (category) => (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  className="group rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                    {category}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Explore {category.toLowerCase()}
                  </p>

                  <span className="mt-4 inline-block font-medium text-indigo-600">
                    Shop Now →
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-indigo-600 px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to find something great?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Browse our complete collection and discover
            products made for you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-gray-100"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;