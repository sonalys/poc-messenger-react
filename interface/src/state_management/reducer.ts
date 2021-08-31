import { combineReducers } from 'redux';
import * as utils from './utils';

const initialState = {
  loginError: null,
  pendingResponse: false,
  username: '',
  isLoggedIn: false,
  lastMessagePollingTime: 0,
  messages: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PERFORM_LOGOUT':
    case 'GET_MESSAGES':
    case 'GET_USER_NAME': {
      return {
        ...state,
        pendingResponse: true,
      };
    }
    case 'GET_USER_NAME_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        username: utils.getData(action),
        isLoggedIn: true,
      };
    }
    case 'GET_USER_NAME_FAIL': {
      return {
        ...state,
        pendingResponse: false,
        username: null,
        isLoggedIn: false,
      };
    }
    case 'PERFORM_LOGIN': {
      return {
        ...state,
        pendingResponse: true,
        username: utils.getReqData(action).username,
        loginError: null,
      };
    }
    case 'PERFORM_LOGIN_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        isLoggedIn: true,
        loginError: null,
      };
    }
    case 'PERFORM_LOGIN_FAIL': {
      return {
        ...state,
        pendingResponse: false,
        isLoggedIn: false,
        loginError: utils.getError(action) ?? 'Failed to connect to server',
      };
    }
    case 'POST_MESSAGE': {
      return {
        ...state,
        pendingResponse: true,
        messages: [...state.messages, utils.createPendingMessage(state.username, action)]
      };
    }
    case 'POST_MESSAGE_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
      };
    }
    case 'DELETE_MESSAGE_SUCCESS': {
      const index = utils.previousAction(action).deletingIndex;
      return {
        ...state,
        messages: utils.removeIndex(state.messages, index),
      };
    }
    case 'GET_MESSAGES_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        lastMessagePollingTime: utils.getNow(),
        messages: [...utils.filterPendingMessages(state.messages), ...utils.getData(action)],
      };
    }
    case 'PERFORM_LOGOUT_SUCCESS': {
      return initialState;
    }
    case 'GET_MESSAGES_FAIL': {
      return {
        ...state,
        pendingResponse: false,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
