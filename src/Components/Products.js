import './Products.css';
import dataImages from '../data/dataImages';
import ModalGallery from './ModalGallery.js';
import {useState, useEffect} from 'react';

const Products = () => {

    const [picId, setPicId] = useState("");
    const [picSrc, setPicSrc] = useState("");
    const [picTitle, setPicTitle] = useState("");


    const handleClick = (id, title, src) => {
        setPicId(id);
        setPicTitle(title);
        setPicSrc(src);
    } 

    return (
        <div id="products" className='products'>
            <ModalGallery dataImages={dataImages.cardThree} picId={picId} picTitle={picTitle} picSrc={picSrc}/>
            <div className="container">
                <div className="row">
                {dataImages.cardThree.map(image => {
                    return ( 
                        <div className='col-lg-4 col-md-6 col-sm-12 column-img'>
                            <a  data-bs-toggle="modal" data-bs-target="#sweaters-modal-3">
                                <img id={image.id} onClick={() => handleClick(image.id, image.title, image.imgSrc)} className='products-gallery-img' src={image.imgSrc} alt={image.title} ></img>
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