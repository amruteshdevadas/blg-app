import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              Blog App
            </div>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() => navigate("/blog/add-form")}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Add New Blog
            </div>
            {/* <div
              onClick={() => navigate("/about")}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              About
            </div>
            <div
              to="/contact"
              onClick={() => navigate("/contact")}
              className="text-white hover:text-gray-200 cursor"
            >
              Contact
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
