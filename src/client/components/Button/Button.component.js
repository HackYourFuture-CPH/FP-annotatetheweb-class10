import React,{Component} from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


const FormButtons = ( {title,buttons,logo,align,submit,click} )  => {   
     
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