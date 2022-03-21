import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../Redux/dialogsReducer.js'
import StoreContext from "../../StoreContext.js";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
   

   

   return <StoreContext.Consumer> 
      { 
      (store) => { 
         let state = store.getState().dialogsPage;

         let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator);
         };
      
         let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
         };
         return <Dialogs updateNewMessageBody={onNewMessageChange} onSendMessage={onSendMessageClick} dialogsPage={state}/>
         }
      }
      </StoreContext.Consumer>
};
export default DialogsContainer;