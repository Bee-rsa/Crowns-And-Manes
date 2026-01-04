import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import LogoImg from "../../assets/file_000000006140720c8faabaf97a58c4cf.png";
import SecondImg from "../../assets/IMG-20251230-WA0018(1).jpg";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice.js";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setNavDrawerOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div>
        <nav className="container w-full bg-black max-w-none flex items-center justify-between py-8 px-4 sm:px-6">
          
          {/* Logo */}
          <div>
            <Link
  to="/"
  className="flex items-center gap-1 sm:gap-2 max-w-full overflow-hidden"
>
  <img
    src={LogoImg}
    alt="Logo"
    className="h-10 sm:h-24 -mt-1 flex-shrink-0"
  />
  <img
    src={SecondImg}
    alt="Secondary Logo"
    className="h-8 sm:h-16 mt-2 flex-shrink-0"
  />
</Link>

          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/collections/all?category=Print" className="text-white hover:text-crown-gold uppercase">
              Products
            </Link>
            <Link to="/about-us" className="text-white hover:text-crown-gold uppercase">
              About
            </Link>
            <Link to="/contact-page" className="text-white hover:text-crown-gold uppercase">
              Contact
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {user && user.role === "admin" && (
              <Link
                to="/admin"
                className="hidden md:flex items-center bg-crown-gold px-3 py-1 rounded text-black"
              >
                <HiOutlineLockClosed className="h-4 w-4 mr-1" />
                Admin
              </Link>
            )}

            <Link to="/profile" className="hidden md:block">
              <HiOutlineUser className="h-6 w-6 text-crown-gold" />
            </Link>

            <button onClick={toggleCartDrawer} className="relative hidden md:block">
              <HiOutlineShoppingBag className="h-6 w-6 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                toggleCartDrawer();
                toggleNavDrawer();
              }}
              className="flex items-center gap-3 text-white hover:text-crown-gold"
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-crown-gold" />
              <span className="text-lg"></span>
              {cartItemCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-crown-gold" />
            </button>
          </div>
        </nav>

        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      </div>

      {/* Backdrop */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavDrawer}
        />
      )}

      {/* ===== MOBILE SIDE DRAWER ===== */}
      <div
        className={`fixed top-0 left-0 w-3/5 sm:w-1/2 h-full bg-black z-50 transform transition-transform ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="p-4 space-y-6">

          {/* Categories */}
          <h2 className="text-xl -mt-12 text-crown-gold font-semibold">Categories</h2>
          <div className="border-b border-gray-500 w-2/3"></div>

          <nav className="space-y-4">
            <Link to="/design-customization" onClick={toggleNavDrawer} className="block text-white hover:text-crown-gold text-lg">
              Products
            </Link>
            <Link to="/collections/all?category=Print" onClick={toggleNavDrawer} className="block text-white hover:text-crown-gold text-lg">
              Vietnamese Wigs
            </Link>
            <Link to="/collections/all?category=Signs" onClick={toggleNavDrawer} className="block text-white hover:text-crown-gold text-lg">
              Peruvian Wigs
            </Link>
            <Link to="/collections/all?category=Branding" onClick={toggleNavDrawer} className="block text-white hover:text-crown-gold text-lg">
              Installations & Customization
            </Link>
            <Link to="/collections/all?category=Paint" onClick={toggleNavDrawer} className="block text-white hover:text-crown-gold text-lg">
              Wig Wash Services
            </Link>
          </nav>

          <div className="border-b border-gray-500 w-2/3"></div>

          {/* 🔥 MOBILE PROFILE + CART */}
          <div className="flex flex-col gap-4 border-b border-gray-600 pb-6">
            <Link
              to="/profile"
              onClick={toggleNavDrawer}
              className="flex items-center gap-3 text-white hover:text-crown-gold"
            >
              <HiOutlineUser className="h-6 w-6 text-crown-gold" />
              <span className="text-lg">Profile</span>
            </Link>

            
          </div>

          {/* Admin */}
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              onClick={toggleNavDrawer}
              className="flex items-center gap-2 bg-crown-gold px-4 py-2 rounded text-black w-2/3"
            >
              <HiOutlineLockClosed />
              Admin
            </Link>
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-2/3 bg-red-400 px-4 py-3 rounded text-white mt-8"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
