import React, { Component } from 'react';
import DotButton from '../../components/DotButton/DotButton.component';
import DropDown from '../DropDown/DropDown.component';
import Input from '../../components/Input/Input.component';
import CommentList from '../CommentList/CommentList.component';
import './BlogCardcss.css';

// BlogCard class component
class BlogCard extends Component {
  state = {
    inputValue: [],
    showDropdown: false,
  };

  getComments = async() => {
    const fkAnnotationsId = this.props.annotationId;
    const response =  await fetch(`/api/comments/annotation/${fkAnnotationsId}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    });
    const previousComments = await response.json();
    this.setState({inputValue: previousComments});
  }

  async componentDidMount() {
    this.getComments();
  }
  // Input event handler
  handleInputChange = async (event) => {//ON ENTER CHANGE
    if (event.keyCode === 13) {
      const input = event.target;
      const newComment = event.target.value;      
      const fkAnnotationsId = this.props.annotationId;      
      const fkUserId = JSON.parse(localStorage.getItem('user_id')) || null;
      await this.postComment(newComment, fkAnnotationsId, null, fkUserId);
      await this.getComments();
      input.value = '';
    }
  };

  async postComment(description, fkAnnotationsId, fkCommentsId, fkUserId) {
    await fetch('/api/comments/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description,
        fk_annotations_id: fkAnnotationsId,
        fk_comments_id: fkCommentsId,
        fk_user_id: fkUserId,
      }),
    });
  }

  // button click event handler
  onClickHandle = () => {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }
  };

  render() {
    const titleArray = [
      { id: 1, title: '...' },
      { id: 2, title: 'pin' },
      { id: 3, title: 'mark as done' },
      { id: 4, title: 'send to Trolle' },
    ];
    console.log(' this.state.inputValue', this.state.inputValue)
    return (
      <>
        <div className="work-panel">
          <div className="blog-card">
            <div className="menu-right">
              <DotButton title="..." onClickHandle={this.onClickHandle} />
              {this.state.showDropdown && (
                <DropDown
                  titleArray={titleArray}
                  onClickHandle={this.onClickHandle}
                />
              )}
            </div>
            <Input
              name="blogCardLabel"
              title={this.props.title}
              description={this.props.description}
              placeholder="add comment..."
              type="input"
              handleInputChange={this.handleInputChange}
            />
          </div>
          <CommentList inputValue={this.state.inputValue} />
        </div>
      </>
    );
  }
}

export default BlogCard;
