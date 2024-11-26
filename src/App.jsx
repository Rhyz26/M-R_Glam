import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Deals from "./components/Deals";
import Categories from "./components/Categories";
import Profile from "./components/Profile";


function App() {
  return (
     <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </>
  );
}

export default App;
