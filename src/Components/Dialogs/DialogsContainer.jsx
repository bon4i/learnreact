import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../Redux/dialogsReducer.js'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
   
   let state = props.store.getState().dialogsPage;

   let onSendMessageClick = () => {
      debugger;
      props.store.dispatch(sendMessageCreator);
   };

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   };
   

   return (
      <Dialogs updateNewMessageBody={onNewMessageChange} onSendMessage={onSendMessageClick} dialogsPage={state}/>
      );
};
export default DialogsContainer;