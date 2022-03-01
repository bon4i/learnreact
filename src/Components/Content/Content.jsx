import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = () => {
   return (
      <div className={classes.content}>
         <ProfileInfo/>
         <MyPosts/>
      </div>
   );
};

export default Content;