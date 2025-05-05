import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetail from './components/PostDetail';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;