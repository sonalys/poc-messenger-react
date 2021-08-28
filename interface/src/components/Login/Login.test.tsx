/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Login from './Login.tsx';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('should route correctly', () => {
  test('logged in should route to /messages', async () => {
    const mockCallback = jest.fn();
    const getUserName = jest.fn();
    render(
      <Login
        getUserName={getUserName}
        isLoggedIn
        history={{ push: mockCallback }}
      />
    );
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  test('logged out should not route', async () => {
    const mockCallback = jest.fn();
    const getUserName = jest.fn();
    render(
      <Login getUserName={getUserName} history={{ push: mockCallback }} />
    );
    expect(mockCallback.mock.calls.length).toBe(0);
  });
});

describe('should set states', () => {
  test('should update username state', async () => {
    const getUserName = jest.fn();
    const props = {
      getUserName,
      username: '',
    };

    const mockFn = jest.fn();

    jest.spyOn(React, 'useState').mockReturnValue(['', mockFn]);

    const wrapper = mount(<Login {...props} />);

    props.username = 'foo/bar';
    wrapper.setProps(props);

    expect(getUserName.mock.calls.length).toBe(1);
    expect(mockFn).toBeCalledWith('foo/bar');
  });

  test('should update username when typing', async () => {
    const setUsernameMock = jest.fn();

    jest.spyOn(React, 'useState').mockReturnValueOnce(['', setUsernameMock]);

    const wrapper = mount(<Login getUserName={jest.fn()} />);
    const input = wrapper.find('#login-username');

    input.first().simulate('change', { target: { value: '123' } });
    expect(setUsernameMock).toBeCalledWith('123');
  });

  test('should update password when typing', async () => {
    const setPasswordMock = jest.fn();

    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce(['', jest.fn()])
      .mockReturnValueOnce(['', setPasswordMock]);

    const wrapper = mount(<Login getUserName={jest.fn()} />);
    const input = wrapper.find('#login-password');

    input.first().simulate('change', { target: { value: '123' } });
    expect(setPasswordMock).toBeCalledWith('123');
  });
});

describe('should login with enter', () => {
  const performLogin = jest.fn();

  const wrapper = mount(
    <Login getUserName={jest.fn()} performLogin={performLogin} />
  );
  const input = wrapper.find('#login-password');

  input.first().simulate('keyDown', { code: 'Enter' });
  expect(performLogin).toBeCalled();
});
