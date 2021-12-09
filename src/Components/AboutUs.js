import React, {useEffect, useState} from "react";
import PicOne from '../images/tres-sweaters.jpg';
import PicTwo from '../images/mujer-sweater.jpg';
import './AboutUs.css';

const AboutUs = () => {
    
    const [headerEffect, setHeaderEffect] = useState('');
    const [subHeaderEffect, setSubHeaderEffect] = useState('');
    const [buttonEffect, setButtonEffect] = useState('');
    const [textEffect, setTextEffect] = useState('');
    const [offsetY, setOffsetY] = useState(0);
  


    const handleScroll = () => {
    
      setOffsetY(window.pageYOffset);
  
      }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            let element = document.getElementById('scroll-content');
            let screenSize = window.innerHeight;
    
            if(element.getBoundingClientRect().top < screenSize){
                setTimeout(()=>{setSubHeaderEffect('visible')}, 300);
                setTimeout(()=>{setHeaderEffect('visible')}, 700);
                setTimeout(()=>{setTextEffect('visible')}, 900);
                setTimeout(()=>{setButtonEffect('visible')}, 1100);
            } else {
                setTimeout(()=>{setSubHeaderEffect('visible')}, 300);
                setTimeout(()=>{setHeaderEffect('visible')}, 700);
                setTimeout(()=>{setTextEffect('visible')}, 900);
                setTimeout(()=>{setButtonEffect('visible')}, 1100);
            }
    
        })
      
    }, []);
 


    return (
   

        <div className="about-us row " id="about-us" name="about-us">
            <div className="divisor col-12">
                <br />
                <hr />
                <br />
            </div>
            <div className="info col-lg-6  col-xs-12">
                <h6 className={`fadeTop ${subHeaderEffect}`}>MADE BY HAND</h6>
                <h2 className={`info-title fadeTop ${headerEffect}`}>Manufacturing Process</h2>
                <p className={`info-text fadeTop  ${textEffect}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in commodo metus. 
                    Ut neque sapien, volutpat sed leo sit amet, rutrum tristique ex. Nulla non facilisis ante. 
                    Sed sit amet imperdiet quam. Suspendisse suscipit arcu nec consectetur aliquam.
                    </p>
                    <button type="button" className={`btn btn-outline-light fadeTop ${buttonEffect}`}>More Info</button>
            </div>
            <div className="image-one col-lg-6  col-xs-12" >
                <img className="pic" src={PicOne} style={{ transform: `translateY(-${offsetY/10}px)`, transition: "all 2s ease-out" }}/>
            </div>
            <div className="divisor-mobile col-12">
                <br />
                <hr />
                <br />
            </div>
            <div className="image-one col-lg-6  col-xs-12" >
                <img className="pic" src={PicTwo} style={{ transform: `translateY(-${offsetY/10}px)`, transition: "all 2s ease-out" }}/>
            </div>
            <div className="info col-lg-6  col-xs-12">
                <h6 className={`fadeTop ${subHeaderEffect}`}>GIVING YOUR WARDROBE A TOUCH OF EDGE</h6>
                <h2  className={`info-title fadeTop ${headerEffect}`}>New Season Styles</h2>
                <p className={`info-text fadeTop  ${textEffect}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in commodo metus. 
                    Ut neque sapien, volutpat sed leo sit amet, rutrum tristique ex. Nulla non facilisis ante. 
                    Sed sit amet imperdiet quam. Suspendisse suscipit arcu nec consectetur aliquam. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis tortor.
                    .</p>
                    <button type="button" className={`btn btn-outline-light fadeTop ${buttonEffect}`}>More Info</button>
            </div>
        
            <div className="divisor col-12">
                <br />
                <hr />
                <br />
            </div>
      
        </div>
     
    )
}

export default AboutUs; 