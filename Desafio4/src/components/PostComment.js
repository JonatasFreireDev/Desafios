import React, { Component } from 'react';

class PostComment extends Component{

  render(){
    return(
      <div className="comment">
        <div className="avatarComment"><img src={this.props.data.author.avatar} alt=""/></div>
        <div className="textComment"><strong>{this.props.data.author.name}</strong> {this.props.data.content}</div>
      </div>
    )
  }
}

export default PostComment;