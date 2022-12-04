import React from 'react';

export default function header({ currentPage, handlePageChange }) {
   
    return (
        <div class='header'>
        <h1>Mason Davis's Portfolio</h1>
        <nav>
            <ul class='navList'>
                <li class='listItem'><a 
                href="#about-me"
                onClick={() => handlePageChange('about')}
                className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                >About Me</a></li>
                <li class='listItem'><a 
                href="#projects"
                onClick={() => handlePageChange('projects')}
                className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
                >Projects</a></li>
                <li class='listItem'><a 
                href="#resume"
                onClick={() => handlePageChange('resume')}
                className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                >resume</a></li>
                <li class='listItem'><a 
                href="#contact"
                onClick={() => handlePageChange('contact')}
                className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                >contact</a></li>
            </ul>
        </nav>
        </div>
    );
  }