/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const deleteMessage = (index: number) => (
  {
    payload: {
      request: {
        method: 'delete',
        url: '/api/ui/messages',
        data: { index }
      },
    },
    type: 'DELETE_MESSAGE',
    // bug axios doesn't put req.payload.data on delete method.
    deletingIndex: index,
  }
);

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

export const performLogin = (username: string, password: string) => (
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

export const getMessages = (since?: number) => (
  {
    payload: {
      request: {
        method: 'get',
        url: `/api/ui/messages/${since ?? 0}`,
      },
    },
    type: 'GET_MESSAGES',
  }
);

export const postMessage = (message: string) => (
  {
    payload: {
      request: {
        method: 'post',
        url: '/api/ui/messages',
        data: { message },
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
