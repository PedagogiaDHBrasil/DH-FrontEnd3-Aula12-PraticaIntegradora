import React from "react";

class PostItem extends React.Component {
  constructor() {
    super();
    console.log("constructor executado");
  }
  componentDidMount() {
    console.log("componentDidMount executado");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executado");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount executado");
  }
  onDelete = e => {
    e.preventDefault();
    this.props.onDelete(this.props.post);
  };
  render() {
    console.log("render executado");
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
        <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}



export default PostItem;
