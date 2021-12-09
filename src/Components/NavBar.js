import React, {useEffect, useState} from "react";
import './NavBar.css';

const NavBar = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [ocultarNavegador, setOcultarNavegador] = useState('');


    const handleScroll = () => {
    
      setOffsetY(prevState => {
        if(prevState > window.pageYOffset){
  
            setOcultarNavegador('scrolled-up');
       
        } else{
          
            setOcultarNavegador('scrolled-down');  
        }
        return window.pageYOffset;
        });

    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  
    return (
        <nav className={`navbar smart-scroll inner-bar navbar-expand-lg navbar-light ${ocultarNavegador}`}>
           <div class="container-fluid">
           <a class="navbar-brand" href="#" >MALMA</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav">
               <li class="nav-item">
               <a class="nav-link" href="#about-us">About Us</a>
               </li>
               <li class="nav-item">
               <a class="nav-link" href="#contact">Contact</a>
               </li>
          
           </ul>
           </div>
       </div>
          
           
   </nav>
      
      
   
    )
}

export default NavBar;