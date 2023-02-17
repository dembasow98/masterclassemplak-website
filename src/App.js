import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './containers/Navigation'
import {Home, Blogs, Contact, About, Properties, News} from './pages'
import { Topbar, Navbar, LandingSlider } from './components/home';
import Footer from './pages/Footer';
import Test from './containers/Test';

function App() {
  return (
    <Router>
      <Topbar/>
      <Test />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<Topbar />} />
          <Route path="/home" element={<Navbar />} />
          <Route path="/home" element={<LandingSlider />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
