import React,{Component} from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import {faGoogle} from '@fortawesome/free-brands-svg-icons';


//let icon={faGoogle};
const FormButtons = ({title,buttons,logo,align})=>{   
return(

<button className={buttons}>
    <FontAwesomeIcon icon={logo} className={align}/>{title}
</button>


)

}

export default FormButtons;