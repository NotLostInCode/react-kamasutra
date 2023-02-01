import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    // Вывод диалогов
    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ];

    // Вывод сообщений
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
    ];

    let dialogsElements = dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    });

    let messagesElements = messages.map((m) => {
        return <Message message={m.message} />
    })

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;