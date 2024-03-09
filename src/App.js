import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home.jsx"; 
import About from "./About";
import Blogs from "./Blogs";
import Classes from "./Classes";
import JoinUs from "./JoinUs";
import Footer from "./Footer.jsx"

import "./styles/header.css"
import "./styles/home.css"
import "./styles/about.css"
import "./styles/footer.css"
import "./styles/classes.css"
import "./styles/blogs.css"
import "./styles/joinus.css"

const App = () => {
  return (
    <>
       <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
