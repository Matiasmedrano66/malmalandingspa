import React, {useEffect, useState} from 'react';
import './Home.css';

const Home = () =>{

    const [headerEffect, setHeaderEffect] = useState('');
    const [subHeaderEffect, setSubHeaderEffect] = useState('');
    const [buttonEffect, setButtonEffect] = useState('');
    const [offsetY, setOffsetY] = useState(0);
  
    const handleScroll = () => {   
      setOffsetY(window.pageYOffset);
      }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const appear = ()=> {
            let element = document.getElementById('scroll-content');
     
            if(element.getBoundingClientRect().bottom == 0){
                setTimeout(()=>{setSubHeaderEffect('visible')}, 400);
                setTimeout(()=>{setHeaderEffect('visible')}, 800);
                setTimeout(()=>{setButtonEffect('visible')}, 1200);
            } else {
                setTimeout(()=>{setSubHeaderEffect('visible')}, 400);
                setTimeout(()=>{setHeaderEffect('visible')}, 800);
                setTimeout(()=>{setButtonEffect('visible')}, 1200);
            }
    
        };
        appear();      
    }, []);


    return (
        <div id="scroll-content" className="slider home scroll-home-content" style={{ transform: `translateY(${offsetY/20}px)`, transition: "all 2s ease-out" }}>
            <div className="load">
            </div>
            <div className="content">
                <div className="principal">
                    <h5 className={`sub-header-home fadeTop ${subHeaderEffect}`}>AUTUM SEASON</h5>
                    <h2 className={`header fadeTop ${headerEffect}`}>Malma Designs</h2>
                    <a href="#contact-title">
                        <button type="button" class={`btn btn-outline-light fadeTop ${buttonEffect}`}>Contact us</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home;