import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jonatas Freire",
          avatar: "https://media.licdn.com/dms/image/C4D03AQGsNZWkSuu4lw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=nTL1yQr3aK-PtcWn7ogwg03YAWrxO7pPIPotNHZ1TdE"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };
  

  render(){
    return(
      <section>
          {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </section>
    )
  }
}

export default PostList;