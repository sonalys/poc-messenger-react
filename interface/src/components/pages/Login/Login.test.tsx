/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import LoginPage from './Login';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('should set states', () => {
  test('should fetch username on initialization', async () => {
    const props = {
      getUserName: jest.fn(),
      username: '',
      isLoggedIn: false,
      history: [],
    };

    mount(<LoginPage {...props} />);
    expect(props.getUserName).toBeCalled();
  });

  test('should redirect home when already logged in', async () => {
    const props = {
      getUserName: jest.fn(),
      username: '',
      isLoggedIn: true,
      history: [],
    };

    const wrapper = mount(<LoginPage {...props} />);

    props.isLoggedIn = true;
    wrapper.setProps(props);

    expect(props.history).toHaveLength(1);
  });
});
