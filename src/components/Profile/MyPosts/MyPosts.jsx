import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map((p) => {
        return <Post message={p.message} count={p.likesCount} />
    })

    let newPostElement = React.createRef()
    
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onClick={newPostElement}></textarea>
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