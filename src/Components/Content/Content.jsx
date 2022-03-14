import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
   return (
      <div className={classes.content}>
         <ProfileInfo/>
         <MyPostsContainer store={props.store}/>
      </div>
   );
};

export default Content;