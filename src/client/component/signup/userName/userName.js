import React from 'react';
import './userName.css';



const UserName = ()=>{
    return(
        <label>
            <div className="user-name"> Username</div>
            <input type="text"  className="user-box"></input>
        </label>
    )
}
export default UserName;