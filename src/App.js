import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Topbar, Navbar, Content, Footer } from './components/common';

function App() {
  return (
    <Router>
      <Topbar/>
      <Navbar />
      <Content />
      <Footer/>
    </Router>
  );
}

export default App;
