import ImagesCarousel from './ImagesCarousel.js';

const Modal = props => {
    return (
    <div>
        <div class="modal" id={props.dataImages[0].card}  tabindex="-1" >
            <div class="modal-dialog modal-xl">
                <div class="modal-content modal-content-gallery">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-body">
                        <ImagesCarousel dataImages={props.dataImages}/>
                    </div>       
                </div>
            </div>
        </div>
    </div>
  
    )
}

export default Modal;