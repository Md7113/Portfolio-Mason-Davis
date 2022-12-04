import React from 'react';

export default function header({ currentPage, handlePageChange }) {
   
    return (
        <div>
        <h1>Mason Davis's Portfolio</h1>
        <nav>
            <ul>
                <li><a 
                href="#home"
                onClick={() => handlePageChange('home')}
                className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                >Home</a></li>
                <li><a 
                href="#projects"
                onClick={() => handlePageChange('projects')}
                className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
                >Projects</a></li>
                <li><a 
                href="#resume"
                onClick={() => handlePageChange('resume')}
                className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                >resume</a></li>
                <li><a 
                href="#contact"
                onClick={() => handlePageChange('contact')}
                className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                >contact</a></li>
            </ul>
        </nav>
        </div>
    );
  }