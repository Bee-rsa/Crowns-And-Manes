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
      {/* Main content wrapper */}
      <div className="">
        <nav className="container w-full bg-black max-w-none flex items-center justify-between py-8 px-4 sm:px-6">
          {/* Left - Logo + Second Image */}
<div>
  <Link to="/" className="flex items-center space-x-2">
    {/* Logo */}
    <img
      src={LogoImg}
      alt="E-Commerce Logo"
      className="h-10 sm:h-24 -mt-2"
    />

    {/* Second Image */}
    <img
      src={SecondImg}
      alt="Secondary Logo"
      className="h-6 sm:h-16 mt-4"
    />
  </Link>
</div>
          {/* Center - Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">

            <Link
              to="/collections/all?category=Print"
              className="text-white hover:text-crown-gold text-sm md:text-base font-medium uppercase whitespace-nowrap"
            >
              Products
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-crown-gold text-sm md:text-base font-medium uppercase whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="/contact-page"
              className="text-white hover:text-crown-gold text-sm md:text-base font-medium uppercase whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
          {/* Right - Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {user && user.role === "admin" && (
              <Link
                to="/admin"
                className="hidden md:flex items-center justify-center bg-crown-gold px-3 py-1 rounded text-sm md:text-base text-white hover:bg-crown-gold transition-colors whitespace-nowrap"
              >
                <HiOutlineLockClosed className="h-4 w-4 mr-1" />
                <span>Admin</span>
              </Link>
            )}
            <Link to="/profile" className="hover:text-green-900">
              <HiOutlineUser className="h-5 w-5 text-crown-gold" />
            </Link>
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
              <HiOutlineShoppingBag className="h-5 w-5s text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </button>
            {/* SearchBar - Visible on all screen sizes */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-red-900" />
            </button>
          </div>
        </nav>

        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      </div>

      {/* Backdrop for mobile drawer */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavDrawer}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-black shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4 space-y-6">
          <h2 className="text-xl text-green-500 font-semibold mb-2">Categories</h2>
          <div className="border-b border-gray-500 w-2/3 mb-4"></div>
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

          {/* Mobile-only items */}
          <div className="mt-6 space-y-4">
            <div className="w-full">
              <div className="border-b border-gray-500 w-2/3 mt-2"></div>
            </div>
            {user && user.role === "admin" && (
              <div className="flex justify-left">
                <Link
                  to="/admin"
                  onClick={toggleNavDrawer}
                  className="flex items-center justify-center bg-green-500 w-2/3 px-2 py-2 rounded text-lg text-white hover:bg-green-600 transition-colors"
                >
                  <HiOutlineLockClosed className="h-4 w-4 mr-1" />
                  <span>Admin</span>
                </Link>
              </div>
            )}
            <div className="border-b border-gray-500 w-2/3"></div>
          </div>

          {/* Logout button at the bottom */}
          <div className="pt-8 flex justify-left">
            <button
              onClick={handleLogout}
              className="w-2/3 bg-red-400 px-4 py-3 rounded text-white text-center hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;