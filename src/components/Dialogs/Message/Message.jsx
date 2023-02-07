import React from 'react'
import s from './../Dialogs.module.css'




const Message = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (

        <div>
            <div className={s.dialog}>{props.message}</div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}




export default Message;