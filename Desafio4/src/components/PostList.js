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
              avatar: "https://media.licdn.com/dms/image/C4D03AQEQas5NMNHUYQ/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=l_m8s6uF4_82FwuVOW821Xw_HGpW4iZ_HXlwEYJkFUQ"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, efficitur vel tellus a, consequat vehicula nunc. Aenean libero erat, accumsan vel quam ut, vestibulum efficitur justo. Sed odio mauris, vehicula vel nulla eget, congue cursus magna. Phasellus a turpis consectetur, mollis augue vel, tempor magna. Maecenas tellus ligula, venenatis sit amet euismod feugiat, laoreet fermentum purus. In hac habitasse platea dictumst. Nam nec porta sem, ac iaculis ipsum. Nullam laoreet velit in tortor facilisis, ac egestas ex tincidunt."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Jonatas Freire",
          avatar: "https://media.licdn.com/dms/image/C4D03AQGsNZWkSuu4lw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=nTL1yQr3aK-PtcWn7ogwg03YAWrxO7pPIPotNHZ1TdE"
        },
        date: "04 Jun 2019",
        content: "Maecenas volutpat ante in odio feugiat, et sodales nibh facilisis. Sed placerat ullamcorper pharetra. Etiam ultrices consequat metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, justo in vestibulum viverra, dui nibh pulvinar est, vitae maximus nisi ipsum a libero. Nulla viverra posuere turpis at gravida. Maecenas tincidunt molestie nulla sed maximus. Nullam viverra faucibus libero et ornare. Sed interdum velit at ante posuere, ut porttitor enim vulputate. Sed vulputate finibus ligula et placerat. Vestibulum eget mi nisl. Donec ac lobortis elit, a vehicula dolor. Aliquam pharetra, nisl vitae finibus scelerisque, erat lacus consequat nibh, at vehicula urna nulla quis sem. Vivamus consequat accumsan tempus.        ",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://media.licdn.com/dms/image/C4D03AQEQas5NMNHUYQ/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=l_m8s6uF4_82FwuVOW821Xw_HGpW4iZ_HXlwEYJkFUQ"
            },
            content: "Etiam ligula neque, tristique id odio ut, accumsan mattis ex. Donec tincidunt tincidunt enim, quis pretium tortor egestas ac. Maecenas vitae sapien nec massa hendrerit porttitor. Aliquam viverra rhoncus elit ac lobortis. Phasellus vel congue nisl. Pellentesque vel porta velit. Donec varius rutrum leo eget tincidunt. Etiam imperdiet pellentesque quam, sit amet elementum sem auctor et.            "
          },
          {
            id: 2,
            author: {
              name: "Jonatas Freire",
              avatar: "https://media.licdn.com/dms/image/C4D03AQGsNZWkSuu4lw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=nTL1yQr3aK-PtcWn7ogwg03YAWrxO7pPIPotNHZ1TdE"
            },
            content: "Donec in sapien tincidunt, ornare diam non, iaculis mauris. In tincidunt nulla blandit mauris facilisis ultricies. Nulla convallis bibendum erat, id imperdiet nisi hendrerit in. Curabitur iaculis gravida sem, finibus pellentesque nisl lacinia nec. Duis pharetra quam nec ipsum fermentum, at auctor tortor mollis. Nam fermentum sed risus a blandit. Nullam volutpat ante arcu, nec aliquam libero ornare id."
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