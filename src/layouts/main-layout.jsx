import { NavBar, NotFoundPage } from "../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/home-page";
import BlogProfile from "../views/blog-profile";
import BlogForm from "../views/add-form";
import SearchPage from "../views/search-page";

const mainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <NavBar />
        <div className="mt-[72px] overflow-scroll">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/blog/:id" element={<BlogProfile />}></Route>
            <Route path="/blog/add-form" element={<BlogForm />}></Route>
            <Route path="/blog/add-form/:id" element={<BlogForm />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default mainLayout;
