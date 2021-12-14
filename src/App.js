import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from './firebase';
import SignUp from './components/SignUp';
import './components/Post.css';
function App({ username , caption, imageUrl }) {
  const { data, setdata} = useState([]);
  // const { post, setPost } = useState([]);
  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => {
  //     setPost(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })));
  //   });

  // });
  return (
    
    <>
          <div className="test">
            <div className="photo">
            <div className="post__header">
                <img
                    className="post__avatar"
                    alt="Jai"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                />
                <h3>
                    <a className="post__author" href="/">
                        {username}
                    </a>
                </h3>
            </div>
            <img
                className="post__image"
                src={imageUrl}
                alt=""
            />
            <h4 className="post__text">
                <strong> {username} </strong> {caption}
                </h4>
            </div>    
        </div>
      {
        data.map(post => (
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
