import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md">
              <ShoppingBag size={18} strokeWidth={2.2} />
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink
              to="/"
              end
              className={navLinkClass}
            >
              <Home
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
            >
              <ShoppingBag
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <span>Products</span>
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ShoppingCart
                size={22}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:scale-105"
              />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[11px] font-bold text-white shadow-sm ring-2 ring-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-indigo-600 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-2">

              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={navLinkClass}
              >
                <Home size={18} strokeWidth={2} />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/products"
                onClick={closeMenu}
                className={navLinkClass}
              >
                <ShoppingBag size={18} strokeWidth={2} />
                <span>Products</span>
              </NavLink>

              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={navLinkClass}
              >
                <ShoppingCart size={18} strokeWidth={2} />
                <span>Cart</span>

                {totalItems > 0 && (
                  <span className="ml-auto rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-600">
                    {totalItems}
                  </span>
                )}
              </NavLink>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
