import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.items.find(p => p.id === parseInt(id))
  );

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-detail">
      <h2>Post Detail</h2>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
};

export default PostDetail;
