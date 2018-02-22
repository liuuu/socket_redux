import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => {
  return {
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author,
  };
};
export const addUser = name => {
  return {
    type: types.ADD_USER,
    id: nextUserId++,
    name,
  };
};
export const messageReceived = (message, author) => {
  return {
    type: types.MESSAGE_RECIEVED,
    id: nextMessageId++,
    message,
    author,
  };
};
export const populateUsersList = users => {
  return {
    type: types.USER_LIST,
    users,
  };
};
