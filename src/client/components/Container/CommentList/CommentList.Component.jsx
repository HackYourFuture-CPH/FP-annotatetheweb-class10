import React from "react";
import List from "../../List/List.Component";

const CommentList = props => {
    
    return(
        <div className="comment-list">
            {props.inputValue.map(item =>            
                <List title={item.comment}/>    
            )}
        </div>
    )     
}

export default CommentList;