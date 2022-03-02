import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
   </div>
   )
}

const Message = (props) => {
   return <div className={classes.dialogs}>{props.message}</div>
}
const Dialogs = (props) => {


   let dialogsElement = props.state.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

   let messageElement = props.state.messages.map (message => <Message message={message.message} id={message.id}/>)

   return (
      
      <div>
         <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messageElement}</div>
         </div>
      </div>
      );
};
export default Dialogs;