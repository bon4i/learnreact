
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
        ]
    }
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

    addPost() {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
      
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      },
    updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      // this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
      },
    dispatch(action) {
      if (action.type ==='ADD-POST') {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
      
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

      } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        // this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        }
      }
}

export default store;
window.store = store;