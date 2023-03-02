import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            // Вывод постов
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'How is your it-kamasutra?', likesCount: 11 },
                { id: 3, message: 'How is your it-kamasutra?', likesCount: 11 },
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            // Вывод диалогов
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
            ],
            // Вывод сообщений  
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // Это объект который описывает какое действие совершить, обязательное свойство - {type: ' '}
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    },
}




export default store;
window.store = store;