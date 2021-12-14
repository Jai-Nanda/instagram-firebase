import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from './firebase';
import SignUp from './components/SignUp';
function App() {
  // const { posts, setPosts } = useState([]);
  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => {
  //     setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })));
  //   }, []);
  // }, []);

  const { posts, setPosts } = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })));
    }, []);
  }, []);

  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <Post/>
        <Routes>
          
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* {
        posts.map(post => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      } */}
    </>

  );
}

export default App;
