import './Products.css';
import dataImages from '../data/dataImages';
import ModalGallery from './ModalGallery.js';

const Products = () => {
    return (
        <div id="products" className='products'>
            <ModalGallery dataImages={dataImages.cardThree}/>
            <div className="container">
                <div className="row">
                {dataImages.cardThree.map(image => {
                    return ( 
                        <div className='col-lg-4 col-md-6 col-sm-12 column-img'>
                            <a data-bs-toggle="modal" data-bs-target="#sweaters-modal-3">
                                <img className='products-gallery-img' src={image.imgSrc} alt={image.title} ></img>
                            </a>  
                        </div>
                    )
                })}
                </div>             
            </div>
        </div>
    )
} 

export default Products;