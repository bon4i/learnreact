import React from 'react';
import classes from'./Aside.module.css';
import {NavLink} from "react-router-dom";


const Aside = () => {
   return (
      <aside className={classes.aside}>
         <div className={classes.item}><NavLink to="/profile">Profile</NavLink></div>
         <div className={classes.item}><NavLink to="/dialogs">Messages</NavLink></div>
         <div className={classes.item}><NavLink to="/news">News</NavLink></div>
         <div className={classes.item}><NavLink to="/music">Music</NavLink></div>
         <div className={classes.item}><NavLink to="/settings">Settings</NavLink></div>
      </aside>
   );
};

export default Aside;