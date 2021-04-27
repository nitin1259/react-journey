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
  };

  clickPostHandler = (id) => {
    console.log(id);
    this.setState({ selectedPost: id });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      const resp_posts = resp.data;
      const updatedPost = resp_posts.slice(0, 3);
      this.setState({ posts: updatedPost });
    });
  }
  render() {
    let displayPost = this.state.posts.map((el) => {
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
