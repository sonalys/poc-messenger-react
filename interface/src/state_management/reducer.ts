import { combineReducers } from 'redux';

const getData = (action) => action?.payload?.data;

const getError = (action) => action?.error?.response?.data?.error

const reducer = (state = {
  loginError: null,
  pendingResponse: false,
  username: null,
  isLoggedIn: false,
  getNameFailed: false,
  messages: null,
}, action) => {
  switch (action.type) {
    case '_LOGIN': {
      return {
        ...state,
        userInfo: null,
        accessDenied: false,
        isLoggedIn: null,
        loginStatusResolved: false,
      };
    }
    case 'GET_USER_NAME': {
      return {
        ...state,
        pendingResponse: true,
      };
    }
    case 'PERFORM_LOGIN': {
      return {
        ...state,
        pendingResponse: true,
        loginError: null,
      };
    }
    case 'GET_MESSAGES': {
      return {
        ...state,
        pendingResponse: true,
        messages: [],
      };
    }
    case 'POST_MESSAGE': {
      return {
        ...state,
        pendingResponse: true,
      };
    }
    case 'PERFORM_LOGOUT': {
      return {
        ...state,
        pendingResponse: true,
      };
    }
    case 'GET_USER_NAME_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        username: getData(action),
        getNameFailed: false,
        isLoggedIn: true,
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
    case 'GET_MESSAGES_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        messages: getData(action),
      };
    }
    case 'POST_MESSAGE_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        messages: getData(action),
      };
    }
    case 'PERFORM_LOGOUT_SUCCESS': {
      return {
        ...state,
        pendingResponse: false,
        isLoggedIn: false,
        loginError: null,
        username: null,
        getNameFailed: false,
      };
    }
    case 'GET_USER_NAME_FAIL': {
      return {
        ...state,
        pendingResponse: false,
        username: null,
        isLoggedIn: false,
        getNameFailed: true,
      };
    }
    case 'PERFORM_LOGIN_FAIL': {
      return {
        ...state,
        pendingResponse: false,
        isLoggedIn: false,
        loginError: getError(action),
      };
    }
    case 'GET_MESSAGES_FAIL': {
      return {
        ...state,
        pendingResponse: false,
        messages: [],
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
