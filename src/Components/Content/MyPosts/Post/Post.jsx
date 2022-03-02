import React from "react";
import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.postAvatar}></div>
      <div className={classes.postMessage}>{props.message}</div>
      <span>Like:</span>
      {props.likesCount}
    </div>     

  );
};

export default Post;
