


const ImageCarousel = props => {
    return (
        <div id={props.dataImages[0].carouselId} class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">          
                <button type="button" data-bs-target={`#${props.dataImages[0].carouselId}`} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${props.dataImages[0].carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${props.dataImages[0].carouselId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                {props.dataImages.map(image => {
                    
                    return(
                        <div class={`carousel-item  + ${image.active}`}>
                            <img src={image.imgSrc} class="d-block w-100" alt={image.title}/>
                        </div>  
                    )              
                })}
            </div>
            <div className='carousel-gallery-buttons'>
                <button class="carousel-control-prev" type="button" data-bs-target={`#${props.dataImages[0].carouselId}`} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={`#${props.dataImages[0].carouselId}`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    )
}

export default ImageCarousel;