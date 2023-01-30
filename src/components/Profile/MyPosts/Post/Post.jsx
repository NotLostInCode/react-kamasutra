import React from 'react'
import s from '../Post/Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>
                <span>{props.count}</span>
            </div>
        </div>
    )
}

export default Post;