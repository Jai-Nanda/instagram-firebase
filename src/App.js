import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { dataBase } from './firebase';
function App() {
  const { posts, setPosts } = useState([]);

  useEffect(() => {
    dataBase.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })));
    }, []);
  }, []);


  return (
    
    <>
      
      <Navbar />  
      {
        posts.map(post => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }
    </>

  );
}

export default App;
