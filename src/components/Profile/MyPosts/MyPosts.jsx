import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map((p) => {
        return <Post message={p.message} count={p.likesCount} />
    })

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}


export default MyPosts;