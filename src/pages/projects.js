import React from "react";
import imgWeather from "../images/weather-port.png";
import imgTravel from "../images/travel-port.png";
import imgBlog from "../images/blog-port.png";
import imgGame from "../images/game-port.png";
import imgNote from "../images/notes-port.png";
import imgTba from "../images/tbe-port.png";

export default function projects() {
    return (
        <div class="body project">
            <div class="card card1">
                <div class="tag">
                    <p>City Weater Application</p>
                </div>
                <a href="https://md7113.github.io/city-weather-forcast/">
                    <img
                        src={imgWeather}
                        alt="image of a storm over a country road"
                    ></img>
                </a>
            </div>
            <div class="card card1">
                <div class="tag">
                    <p>Travel Preperation Application</p>
                </div>
                <a href="https://danialmirza99.github.io/travel-application/">
                    <img src={imgTravel} alt="image of a plane in a sky, sunny"></img>
                </a>
            </div>
            <div class="card card1">
                <div class="tag">
                    <p>Tech Blog</p>
                </div>
                <a href="https://sivad-tech-blog.herokuapp.com/">
                    <img src={imgBlog} alt="image of tech blog"></img>
                </a>
            </div>
            <div class="card card1">
                <div class="tag">
                    <p>Mass Matchup</p>
                </div>
                <a href="https://mass-matchup.herokuapp.com/login">
                    <img src={imgGame} alt="image of old retro arcade games"></img>
                </a>
            </div>
            <div class="card card1">
                <div class="tag">
                    <p>Note taker App</p>
                </div>
                <a href="https://sivad-note-taker.herokuapp.com/">
                    <img src={imgNote} alt="picture of school supplies, "></img>
                </a>
            </div>
            <div class="card card1">
            <div class="tag">
                    <p>Project 3</p>
                </div>
                <a href="#">
                    <img src={imgTba} alt="image of florescant TBA sign on a brick wall"></img>
                </a>
            </div>
        </div>
    );
}
