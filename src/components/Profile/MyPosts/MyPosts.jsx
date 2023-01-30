import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post count='15' message ='Hi, how are you?'/>
                <Post count='20' message ='it my first post' />
            </div>
        </div>
    )
}

export default MyPosts;