 let state = {
  profilePage:{
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: 'Yo Yo Yo',
    likesCount: 21
  };

  state.profilePage.posts.push(newPost);
}

 export default state;