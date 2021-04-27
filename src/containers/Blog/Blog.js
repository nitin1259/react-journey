import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
    isError: false,
  };

  clickPostHandler = (id) => {
    console.log(id);
    this.setState({ selectedPost: id });
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((resp) => {
        const resp_posts = resp.data;
        const updatedPost = resp_posts.slice(0, 3);
        this.setState({ posts: updatedPost });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ isError: true });
      });
  }
  render() {
    let displayPost = (
      <p style={{ textAlign: "center", color: "red" }}>
        {" "}
        Something went wrong.. please wait while we fix it
      </p>
    );
    if (!this.state.isError) {
      displayPost = this.state.posts.map((el) => {
        const newpost = { ...el, author: "Nitin" };
        return (
          <Post
            key={newpost.id}
            title={newpost.title}
            author={newpost.author}
            clickPost={() => this.clickPostHandler(newpost.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{displayPost}</section>
        <section>
          <FullPost selectedId={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
