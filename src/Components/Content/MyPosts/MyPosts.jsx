import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state.js"
const MyPosts = (props) => {
  
  let postsElements = props.posts.map (post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

  let newPostElement = React.useRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  };

  return (
    <div className={classes.content}>

      <div className={classes.my_posts}>Мои записи</div>

      <div className={classes.new_posts}>
        <div className={classes.new_posts}>Новая запись</div>
        <div><textarea className={classes.textArea} ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
        <button className={classes.sendPost} onClick={addPost}>Отправить</button>
      </div>

      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
