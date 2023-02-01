import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'How is your it-kamasutra?', likesCount: 11 },
    ];

    let postElements = posts.map((p) => {
        return <Post message={p.message} count={p.likesCount} />
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;