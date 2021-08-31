import { Message } from 'entities/Message';

export const getNow = () => new Date().getTime();

export const getData = (action) => action.payload.data;
export const getReqData = (action) => action.payload.request.data;
export const previousAction = (action) => action.meta.previousAction;
export const getError = (action) => action.error.response.data.error

export const createPendingMessage = (username: string, action): Message => ({ pending: true, message: getReqData(action).message, sender: username, created_at: getNow() });
export const filterPendingMessages = (messages: Message[]): Message[] => messages.filter(message => !message.pending);

export const removeIndex = <T>(list: T[], index: number): T[] => [...list.slice(0, index), ...list.slice(index + 1)];