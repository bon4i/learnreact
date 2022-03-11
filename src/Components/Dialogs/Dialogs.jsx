import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../Redux/state.js'

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
   let state = props.store.getState().dialogsPage;

   let dialogsElement = state.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

   let messageElement = state.messages.map (message => <Message message={message.message} id={message.id}/>);

   let newMessageBody = state.newMessageBody;


   let onSendMessageClick = () => {
      debugger;
      props.store.dispatch(sendMessageCreator);
   };

   let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
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