import React, { Component } from 'react';
import PostComment from './PostComment';

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
          <p>{this.props.data.content}</p>
          {this.props.data.comments.map(coment => <PostComment key={coment.id} data={coment}/>)}
        </article>
      </div>
    )
  }
}

export default Post;