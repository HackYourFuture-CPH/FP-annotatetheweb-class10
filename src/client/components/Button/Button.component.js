import React from 'react';
//import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FormButtons = ( {title, buttons, logo, align, click} )  => {   
     
    return(
            
             <button className={buttons} onClick={click}>
                <FontAwesomeIcon 
                 icon={logo} 
                 className={align} 
                 />{title}
             </button>
          )
}

export default FormButtons;