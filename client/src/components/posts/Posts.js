import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// components
import Spinner from "../../components/layout/Spinner";
import PostItem from "../../components/posts/PostItem";
import PostForm from "../../components/posts/PostForm";

// actions
import { getPosts } from "../../actions/post";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large-text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user">Welcome to the community</i>
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
