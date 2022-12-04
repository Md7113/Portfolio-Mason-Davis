import React from 'react';
import imgMason from '../images/portrait.jpg'
export default function about() {
   
    return (
        <div class='body about'>
        <aside class='a-m-aside'>
            <h2>About Me</h2>
            <p>My name is mason Davis and I am a computer programmer. I have my associates degree from BYU-Idaho and I am transfering to UVU to finish up my bachleors degree. I am currently enrolled at the UC Berkely full stack programming Bootcamp, and am set to start the MIT data analytics and machine learning program in January.</p>
        </aside>
        <div class='a-m-img'>
            <img class='a-m-img-1' src={imgMason} alt='Image Of Mason Davis'></img>
            <img class='a-m-img-1' src={imgMason} alt='Image Of Mason Davis'></img>
            <img class='a-m-img-1' src={imgMason} alt='Image Of Mason Davis'></img>
            <img class='a-m-img-1' src={imgMason} alt='Image Of Mason Davis'></img>
        </div>
        </div>
    );
  }