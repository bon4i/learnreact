const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
      dialogs: [
        {id: 1, name: 'Роман'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Жора'},
        {id: 4, name: 'Степан'},
        {id: 5, name: 'Андрей'},
        {id: 6, name: 'Сергей'}
      ],
      messages: [
        {id: 1,message: 'Привет!'},
        {id: 2,message: 'Как дела?'},
        {id: 3,message: 'Как погода?'},
        {id: 4,message: 'Как погода?'}
      ],
      newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
switch(action.type) {
   case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
   case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 5, message: body});  
      return state;
   default:
      return state;
   }
}
export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;