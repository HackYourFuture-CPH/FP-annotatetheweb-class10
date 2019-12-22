import React, {Component} from "react";
import DotButton from "../../components/DotButton/DotButton.component";
import DropDown from "../DropDown/DropDown.component";
import Input from "../../components/Input/Input.component";
import CommentList from "../CommentList/CommentList.component";
import './BlogCardcss.css';

//BlogCard class component
class BlogCard extends Component {

    state = {
    inputValue: [],
    showDropdown: false
  };
  //Input event handler
  handleInputChange=(event) =>{
    if(event.keyCode===13){
      const newComment = event.target.value;
      this.setState({inputValue: this.state.inputValue.concat(newComment)});
    }
  }
  //button click event handler
  onClickHandle=(id) =>{
    if(this.state.showDropdown){
      this.setState({showDropdown: false});
    }
    else{
      this.setState({showDropdown: true});
    }
  }

  render(){
    const titleArray=[{id:1,title:'...'},{id:2,title:'pin'},{id:3,title:'mark as done'},{id:4, title:'send to Trolle'}]
    return(
      <React.Fragment>
      <div className="work-panel">
        <div className="blog-card">
          <div className="menu-right">
            <DotButton title={'...'} onClickHandle={this.onClickHandle} />
            {this.state.showDropdown && <DropDown titleArray={titleArray} onClickHandle={this.onClickHandle} /> }
          </div>
          <Input name="blogCardLabel" title="make blog as cards" placeholder="add comment..."
            type="input"
            handleInputChange={this.handleInputChange}
          />
        </div>
         <CommentList inputValue ={this.state.inputValue}/>

      </div>
      </React.Fragment>
    );
  }

};

export default BlogCard;
