/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import LoginForm from './LoginForm';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('should set states', () => {
  test('should update username when typing', async () => {
    const fields = ['', 'password', ''];
    const setUsernameMock = jest.fn();
    const mocks = [setUsernameMock, jest.fn(), jest.fn()];

    let callCount = 0;

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        fields[callCount % fields.length],
        mocks[callCount++ % fields.length],
      ]);

    const wrapper = mount(<LoginForm performLogin={jest.fn()} />);
    const input = wrapper.find('#login-username');

    input.first().simulate('change', { target: { value: '123' } });
    expect(setUsernameMock).toBeCalledWith('123');
  });

  test('should update password when typing', async () => {
    const fields = ['', 'password', ''];
    const setPasswordMock = jest.fn();
    const mocks = [jest.fn(), setPasswordMock, jest.fn()];

    let callCount = 0;

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        fields[callCount % fields.length],
        mocks[callCount++ % fields.length],
      ]);

    const wrapper = mount(<LoginForm performLogin={jest.fn()} />);
    const input = wrapper.find('#login-password');

    input.first().simulate('change', { target: { value: '123' } });
    expect(setPasswordMock).toBeCalledWith('123');
  });
});

describe('should trigger with enter', () => {
  test('empty user should not trigger login', async () => {
    const performLogin = jest.fn();

    const fields = ['', 'password', ''];

    const mockUseState = jest.fn();
    let callCount = 0;

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        fields[callCount++ % fields.length],
        mockUseState,
      ]);

    const wrapper = mount(<LoginForm performLogin={performLogin} />);
    const input = wrapper.find('#login-password');

    input.first().simulate('keyDown', { key: 'Enter' });
    expect(performLogin.mock.calls.length).toBe(0);
  });

  test('empty password should not trigger login', async () => {
    const performLogin = jest.fn();

    const fields = ['username', '', ''];

    const mockUseState = jest.fn();
    let callCount = 0;

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        fields[callCount++ % fields.length],
        mockUseState,
      ]);

    const wrapper = mount(<LoginForm performLogin={performLogin} />);
    const input = wrapper.find('#login-password');

    input.first().simulate('keyDown', { key: 'Enter' });
    expect(performLogin.mock.calls.length).toBe(0);
  });

  test('filled fields should trigger login', async () => {
    const performLogin = jest.fn();
    const fields = ['username', 'password', ''];

    const mockUseState = jest.fn();
    let callCount = 0;

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        fields[callCount++ % fields.length],
        mockUseState,
      ]);

    const wrapper = mount(<LoginForm performLogin={performLogin} />);

    const input = wrapper.find('#login-password');
    input.first().simulate('keyDown', { key: 'Enter' });

    expect(performLogin).toBeCalledWith('username', 'password');
  });
});
