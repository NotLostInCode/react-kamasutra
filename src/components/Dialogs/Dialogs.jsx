import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';






const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    });
    let messagesElements = state.messages.map((m) => {
        return <Message message={m.message} />
    })

    

    // Вывод сообщений
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div> {messagesElements}</div>
               <div>
                    <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
               </div>
            </div>
        </div>
    )
}

export default Dialogs;