let rerenderEntireTree = () => {
    console.log('State changed')
}


let state = {
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
        ]
    }
}


// Получение новых сообщений от пользователей 
// и добавление в существующий массив с объектами - state

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default state;