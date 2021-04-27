import axios from "axios";
import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null,
  };

  componentDidUpdate() {
    if (this.props.selectedId) {
      if (
        !this.state.post ||
        (this.state.post && this.state.post.id !== this.props.selectedId)
      ) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" +
              this.props.selectedId
          )
          .then((resp) => {
            console.log(resp);
            this.setState({ post: resp.data });
          });
      }
    }
  }

  render() {
    let post = (
      <p style={{ textAlign: "center", color: "green" }}>
        Please select a Post!
      </p>
    );
    if (this.props.selectedId) {
      post = <p style={{ textAlign: "center", color: "red" }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
