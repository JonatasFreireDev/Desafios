import React, { Component } from 'react';

class Post extends Component{

  render(){
    return(
      <div className="post" >
        <div className="headerPost">
          <div className="avatar">
            <img src={this.props.data.author.avatar} alt=""/>
          </div>
          <div className="author">
            <strong>{this.props.data.author.name}</strong>
            <small>{this.props.data.date}</small>
          </div>
        </div>
        <article>
          <p>Some text</p>
        </article>
      </div>
    )
  }
}

export default Post;