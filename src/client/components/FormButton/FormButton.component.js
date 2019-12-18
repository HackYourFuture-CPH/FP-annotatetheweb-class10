import React from 'react';
import './FormButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FormButton = ( {title, buttons, logo, align, click} )  => {   
     
    return(
            
             <button className={buttons} onClick={click}>
                <FontAwesomeIcon 
                 icon={logo} 
                 className={align}
                 />{title}
             </button>
          )
}

export default FormButton;