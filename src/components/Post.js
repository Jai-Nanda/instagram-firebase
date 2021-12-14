import React from 'react';
import './Post.css';
import { db } from '../firebase';
const Post = ({ username, caption, imageUrl }) => {
    return (
        <div className="post">
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
    );
};
export default Post;
