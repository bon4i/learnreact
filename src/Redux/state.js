import { rerenderEntireTree } from "../render";

 let state = {

  profilePage:{
    newPostText: '',
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
  };

  window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
  };

 export default state;