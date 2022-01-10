import './ImagesGalleryCarousel.css';
import {useState, useEffect} from 'react';
   

const ImagesGalleryCarousel = props => {
    return (
    <div id={props.dataImages[0].carouselId} class="carousel  slide" data-bs-ride="carousel">
        <div class="carousel-inner">  
            <div class="carousel-item active">
                <img className='carousel-img'src={props.picSrc} class="d-block w-100" alt={props.picTitle}/>
            </div>  
        </div>
    </div>
    )
}

export default ImagesGalleryCarousel;