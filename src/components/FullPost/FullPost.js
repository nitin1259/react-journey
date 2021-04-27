import axios from "axios";
import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.post ||
        (this.state.post && this.state.post.id !== this.props.id)
      ) {
        axios.get("/posts/" + this.props.id).then((resp) => {
          console.log(resp);
          this.setState({ post: resp.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.id).then((resp) => {
      console.log(resp);
    });
  };

  render() {
    let post = (
      <p style={{ textAlign: "center", color: "green" }}>
        Please select a Post!
      </p>
    );
    if (this.props.id) {
      post = <p style={{ textAlign: "center", color: "red" }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
