import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
   return (
      <div className={classes.content}>
         <ProfileInfo/>
         <MyPosts posts={props.state.posts}/>
      </div>
   );
};

export default Content;