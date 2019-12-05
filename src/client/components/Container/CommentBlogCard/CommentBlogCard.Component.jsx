import React from "react";
import List from "../../List/List.Component"

const CommentBlogCard = props => {

    return(
        <div className="inputBox">
            <label for={props.name} className="blog-card-label">
                {props.titleLabel}
            </label>
            <List                       
                title={props.title}       
            /> 
        </div>
    )   
}
export default CommentBlogCard