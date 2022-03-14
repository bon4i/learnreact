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

const MessageItem = (props) => {
   return <div className={classes.dialogs}>{props.message}</div>
}
const Dialogs = (props) => {
   let state = props.dialogsPage;

   let dialogsElement = state.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

   let messageElement = state.messages.map (message => <MessageItem message={message.message} id={message.id}/>);

   let newMessageBody = state.newMessageBody;


   let onSendMessageClick = () => {
      props.sendMessage();
   };

   let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body);
   };
   

   return (
      
      <div>
         <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>

            <div className={classes.messages}>
               <div>{messageElement}</div>
               <div>
                  <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Введите ваше сообщение"></textarea></div>
                  <div><button onClick={onSendMessageClick}>Отправить</button></div>
               </div>
            </div>
         </div>
      </div>
      );
};
export default Dialogs;