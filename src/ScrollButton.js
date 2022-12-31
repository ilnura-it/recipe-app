import React, {useState} from 'react';
import { FaAngleUp } from "react-icons/fa";

function ScrollButton (){

   const [visible, setVisible] = useState(false);

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

   return (
      
         <button className="back-to-top-btn"onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} >
           <FaAngleUp className="back-to-top"/>
         </button>
      
   )
}

export default ScrollButton;