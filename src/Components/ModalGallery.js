import './ModalGallery.css';
import ImagesGalleryCarousel from './ImagesGalleryCarousel';

const ModalGallery = props => {
    return (
        <div class="modal fullscreen-modal" id={props.dataImages[0].card} tabindex="-1">
        <div class="modal-dialog modal-xl">
              
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
         
            <div class="modal-content modal-content-gallery">
            <div class="modal-body">
            <ImagesGalleryCarousel dataImages={props.dataImages}/>
            </div>   
            </div>
            
        </div>
        </div>      
    )
}

export default ModalGallery;