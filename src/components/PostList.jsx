import React from "react";
import PostItem from "./PostItem.jsx";
import PostForm from "./PostForm.jsx";

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post Title 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        title: "Post Title 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };

  handleSubmit = event => {
    event.preventDefault();
    // AREA DE TRABALHO --> 
    // Primeiro devemos saber se temos um post ou não
    // Segundo devemos criar um novo post com o que o evento traz
    // Terceiro, devemos adicioná-lo ao nosso array de posts e atualizar o estado

  };

  handleDelete = postToDelete => {
    // AREA DE TRABALHO --> Faça uma função para excluir o post selecionado

  };

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <PostForm onSubmit={this.handleSubmit} />
        {posts.map(post => (
          <PostItem key={post.id} post={post} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default PostList;
