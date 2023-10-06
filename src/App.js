import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import AboutUs from "./components//Aboutus"; // Correct the import
import Category from "./components/Category";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import ScrollToTop from "./components/ScrollToTop";
import Category2 from "./components/Category2";
import Category3 from "./components/Category3";
import Category4 from "./components/Category4";
import Category5 from "./components/Category5";
import Destination from "./components/Destination";
import DestinationSingle from "./components/DestinationSingle";
import ChatApp from "./components/ChatApp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
          <Route path="/category" element={<Category />} />{" "}
          <Route path="/SignIn" element={<SignIn />} /> {/* Add this route */}
          <Route path="/Category2" element={<Category2 />} />
          <Route path="/Category3" element={<Category3 />} />
          <Route path="/Category4" element={<Category4 />} />
          <Route path="/Category5" element={<Category5 />} />
          <Route path="/SignUp" element={<SignUp />} /> {/* Add this route */}
          <Route path="/destination" element={<Destination />} />
          <Route path="/DestinationSingle" element={<DestinationSingle />} />
          {/* Add this route */}
        </Routes>
        <ScrollToTop />
        <ChatApp />
        <Footer />
      </Router>
    </>
  );
}

export default App;
