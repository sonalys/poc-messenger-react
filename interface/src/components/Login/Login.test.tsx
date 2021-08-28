/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Login from './Login.tsx';

configure({ adapter: new Adapter() });
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

describe('should load states', () => {
  test('should get username', async () => {
    const getUserName = jest.fn();
    getUserName.mockReturnValue('foo/bar');

    const app = shallow(<Login getUserName={getUserName} />);
    expect(getUserName.mock.calls.length).toBe(1);

    app.render();
    expect(getUserName.mock.calls.length).toBe(1);

    const input = await app.find('input');
    expect(input.first().text).toBe('foo/bar');
  });
});
