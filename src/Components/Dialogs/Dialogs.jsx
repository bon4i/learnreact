import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
   </div>
   
}

const Message = (props) => {
   return <div className={classes.dialogs}>{props.message}</div>
}
const Dialogs = (props) => {

   let dialogsData = [
      {id: 1, name: 'Роман'},
      {id: 2, name: 'Катя'},
      {id: 3, name: 'Жора'},
      {id: 4, name: 'Степан'},
      {id: 5, name: 'Андрей'},
      {id: 6, name: 'Сергей'}
   ]
   let messageData = [
      {id: 1,message: 'Привет!'},
      {id: 2,message: 'Как дела?'},
      {id: 3,message: 'Как погода?'},
      {id: 4,message: 'Как погода?'}
   ]
   return (
   <div>
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
         </div>
         <div className={classes.messages}>
            <Message message={messageData[0].message} id={dialogsData[0].id}/>
            <Message message={messageData[1].message} id={dialogsData[1].id}/>
            <Message message={messageData[2].message} id={dialogsData[2].id}/>
            <Message message={messageData[3].message} id={dialogsData[3].id}/>
         </div>
      </div>
   </div>
   );
};
export default Dialogs;