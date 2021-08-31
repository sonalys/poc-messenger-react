/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import TextMessage, { IProps } from './TextMessage';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Container } from './styles';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const defaultProps: IProps = {
  msg: { sender: 'foo', message: 'bar' },
  isFromUser: false,
};

describe('touch should render correctly', () => {
  test('should show delete icon only if from self', async () => {
    const props: IProps = {
      ...defaultProps,
      isFromUser: true,
    };

    jest.spyOn(React, 'useState').mockReturnValue([true, jest.fn()]);

    const wrapper = mount(<TextMessage {...props} />);
    const filter = wrapper.find(AiFillDelete);
    expect(filter).toHaveLength(1);
  });

  test("should not show delete for someone's else message", async () => {
    const props: IProps = {
      ...defaultProps,
    };

    jest.spyOn(React, 'useState').mockReturnValue([true, jest.fn()]);

    const wrapper = mount(<TextMessage {...props} />);
    const filter = wrapper.find(AiFillDelete);
    expect(filter).toHaveLength(0);
  });
});

describe('desktop should render correctly', () => {
  test('should show delete icon only if from self', async () => {
    const props: IProps = {
      ...defaultProps,
      isFromUser: true,
    };

    const wrapper = mount(<TextMessage {...props} />);
    const container = wrapper.find(Container);
    container.simulate('mouseover');
    const filter = wrapper.find(AiFillDelete);

    expect(filter).toHaveLength(1);
  });

  test("should not show delete for someone's else message", async () => {
    const props: IProps = {
      ...defaultProps,
    };

    const wrapper = mount(<TextMessage {...props} />);
    const container = wrapper.find(Container);
    container.simulate('mouseover');
    const filter = wrapper.find(AiFillDelete);

    expect(filter).toHaveLength(0);
  });
});
