import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./search-bar";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blend-lighten shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-black text-2xl font-semibold">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              Blog App
            </div>
          </div>
          <SearchBar />
          <div className="flex gap-2">
            <div
              onClick={() => navigate("/blog/add-form")}
              className="text-black cursor-pointer"
            >
              Add New Blog
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
