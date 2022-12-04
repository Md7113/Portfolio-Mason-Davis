import React, { useState } from 'react';
import Index from "./components/index";
import Footer from "./components/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact"
import "./App.css"
function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'about') {
      return <Home />;
    }
    if (currentPage === 'projects') {
      return <Projects />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
  <div>
  <Index currentPage={currentPage} handlePageChange={handlePageChange}/>
  {renderPage()}
  <Footer />
  </div>
  )
}

export default App;

