import React from 'react';
import resumeFile from '../files/resume.docx'
export default function resume() {
   
    return (
        <div class='body resume'>
        <div class='card card2'>
            <h2>Technical Skills</h2>
            <div class='T-Skills'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Node</li>
                </ul>
                <ul>
                    <li>GitBash</li>
                    <li>GitHub</li>
                    <li>Handlebars</li>
                    <li>React</li>
                    <li>MongoDB</li>
                </ul>
                <ul>
                    <li>Mongoose</li>
                    <li>MySQL</li>
                    <li>Sequalize</li>
                    
                </ul>
            </div>
        </div>
        <div class='card card2'>
            <h2>personal Skills</h2>
            <p>I Have spent time working in office enviroments, I am proficient at addapting to knew enviroments. I can complete tasks and implament modules of code into larger bodies. I have worked under an assortment of people and can fit in to a plethera of leadership styles. I know how to take orders well and work until a task is completed. </p>
        </div>
        <a class='Download' href={resumeFile} download>Download Resume</a>
        </div>
    );
  }