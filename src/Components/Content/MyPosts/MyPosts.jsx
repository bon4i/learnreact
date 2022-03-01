import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
const MyPosts = () => {
  let postsData = [
    {message:'Изучаю реакт', likesCount: 12, id:1},
    {message:'Скоро научусь', likesCount: 4, id:2}
  ]
  return (
    <div className={classes.content}>
      <div className={classes.my_posts}>Мои записи</div>
      <div className={classes.new_posts}>
        <div className={classes.new_posts}>Новая запись</div>
        <div><textarea className={classes.textArea} value={"Введите текст..."}></textarea></div>
       <button className={classes.sendPost}>Отправить</button>
      </div>

      <div className={classes.posts}>
      <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
      <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id}/>
      <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
