import { NavBar } from "../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/home-page";
import BlogProfile from "../views/blog-profile";

const mainLayout = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/blog/:id" element={<BlogProfile />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default mainLayout;
