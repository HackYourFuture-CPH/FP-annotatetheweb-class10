import React from 'react';
import './FormField.css';


const FormField = ( {text, box, title, inputtype, textholder, inputclass, changehandler} ) => {
         
         return(
                    <label className={text}>
                       <div className={box}>{title}</div>
                        <input 
                          type={inputtype}
                          placeholder={textholder}
                          onChange={changehandler}
                          className={inputclass}/>
                    </label>
          
              )
     }
    

export default FormField;