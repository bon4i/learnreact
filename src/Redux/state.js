import contentReducer from "./contentReducer";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {

      profilePage:{
        newPostText: 'Привет',
        posts: [
          {message:'Изучаю реакт', likesCount: 12, id:1},
          {message:'Скоро научусь', likesCount: 4, id:2}
        ]
      },
      dialogsPage: {
        dialogs: [
          {id: 1, name: 'Роман'},
          {id: 2, name: 'Катя'},
          {id: 3, name: 'Жора'},
          {id: 4, name: 'Степан'},
          {id: 5, name: 'Андрей'},
          {id: 6, name: 'Сергей'}
        ],
        messages: [
          {id: 1,message: 'Привет!'},
          {id: 2,message: 'Как дела?'},
          {id: 3,message: 'Как погода?'},
          {id: 4,message: 'Как погода?'}
        ],
        newMessageBody: ""
    },
      },
    _callSubscriber() {
     console.log('State was changed');
      },

    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
      
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      },
    _updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      // this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
      },
    dispatch(action) {
      this._state.profilePage = contentReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._callSubscriber(this._state);
    }  
}
export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({type:SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;