/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import MessagesPage from './Messages';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const waitMilli = async (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

describe('should set states', () => {
  // scrollIntoView is not implemented in jsdom.
  // https://github.com/jsdom/jsdom/issues/1695
  window.HTMLElement.prototype.scrollIntoView = () => null;

  test('should fetch messages on initialization', async () => {
    const props = {
      getMessages: jest.fn(),
    };

    mount(<MessagesPage {...props} />);
    expect(props.getMessages).toBeCalled();
  });

  test('should initialize polling', async () => {
    const setPolling = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [null, setPolling]);

    const props = {
      getMessages: jest.fn(),
    };

    mount(<MessagesPage {...props} />);
    expect(setPolling).toBeCalled();
  });

  test('should call polling after interval', async () => {
    const setPolling = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValueOnce([null, setPolling]);

    const props = {
      getMessages: jest.fn(),
    };

    const wrapper = mount(<MessagesPage {...props} pollingInterval={10} />);
    expect(setPolling).toBeCalled();
    await waitMilli(15);
    expect(props.getMessages).toBeCalledTimes(2);
    wrapper.unmount();
  });

  test('should clear timer on unmount', async () => {
    let mockTimerFlag = false;
    const mockTimer = setInterval(() => {
      mockTimerFlag = true;
    }, 10);

    jest.spyOn(React, 'useState').mockReturnValueOnce([mockTimer, jest.fn()]);

    const wrapper = mount(
      <MessagesPage getMessages={jest.fn()} pollingInterval={10} />
    );
    wrapper.unmount();

    mockTimerFlag = false;
    await waitMilli(15);
    expect(mockTimerFlag).toBeFalsy();
  });
});
