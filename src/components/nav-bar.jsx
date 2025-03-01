import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">
            <div onClick={() => navigate("/")}>Blog App</div>
          </div>
          <div className="space-x-6">
            <div
              onClick={() => navigate("/")}
              className="text-white hover:text-gray-200"
            >
              Home
            </div>
            <div
              onClick={() => navigate("/about")}
              className="text-white hover:text-gray-200"
            >
              About
            </div>
            <div
              to="/contact"
              onClick={() => navigate("/contact")}
              className="text-white hover:text-gray-200"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
