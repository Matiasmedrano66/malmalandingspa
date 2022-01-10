import React, {useEffect, useState} from "react";
import './Presentation.css';
import pic1 from '../images/carousel-pic-1.jpg';
import pic2 from '../images/carousel-pic-2.jpg';
import pic3 from '../images/carousel-pic-3.jpg';


const Presentation = () => {
    return (
        <div className="presentation" name="presentation" id="presentation">
            <h1>Outfit Assessment</h1>
            <h6 className="carousel-text">WE CAN HELP YOU DRESS AS YOU WANT TO BE SEEN</h6>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-interval="200" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner carousel-presentation" >
                <div class="carousel-item active" data-bs-interval="10000">
                <img src={pic3} class="d-block carousel-img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Find your personal style</h5>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src={pic2} class="d-block carousel-img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Mix patterns and textures</h5>  
                </div>
                </div>
                <div class="carousel-item">
                <img src={pic1} class="d-block carousel-img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Work your capsule wardrobe</h5>     
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>    
    )
}

export default Presentation;