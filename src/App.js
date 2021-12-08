import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { dataBase } from './Firebase';
function App() {
  const { posts, setPosts } = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    }
    );
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
