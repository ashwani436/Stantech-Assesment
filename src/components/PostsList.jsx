import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './PostsList.css';
import { fetchPosts } from '../redux/reducers/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.posts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = items.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="posts-list">
      <h2>Posts List</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/post/${post.id}`} className="view-link">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
