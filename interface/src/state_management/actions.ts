export const getUserName = () => (
  {
    payload: {
      request: {
        method: 'get',
        url: '/api/ui/name',
      },
    },
    type: 'GET_USER_NAME',
  }
);

export const performLogin = (username, password) => (
  {
    payload: {
      request: {
        method: 'post',
        url: '/api/ui/login',
        data: { username, password },
      },
    },
    type: 'PERFORM_LOGIN',
  }
);

export const getMessages = () => (
  {
    payload: {
      request: {
        method: 'get',
        url: '/api/ui/messages',
      },
    },
    type: 'GET_MESSAGES',
  }
);

export const postMessage = (sender, message) => (
  {
    payload: {
      request: {
        method: 'post',
        url: '/api/ui/messages',
        data: { sender, message },
      },
    },
    type: 'POST_MESSAGE',
  }
);

export const performLogout = () => (
  {
    payload: {
      request: {
        method: 'get',
        url: '/api/ui/logout',
      },
    },
    type: 'PERFORM_LOGOUT',
  }
);
