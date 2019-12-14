import React from "react";
import List from "../../components/List/List.component";

const CommentList = props => {
    
    return(
        <div className="comment-list">
            {props.inputValue.map(item =>            
                <List key={item.id} title={item.comment}/>    
            )}
        </div>
    )     
}

export default CommentList;