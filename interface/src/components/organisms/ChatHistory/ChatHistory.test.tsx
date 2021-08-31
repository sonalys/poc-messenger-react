/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import ChatHistory, { IProps } from './ChatHistory';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import TextMessage from 'components/molecules/TextMessage';
import ConfirmationModal from '../ConfirmationModal';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const defaultProps: IProps = {
  messages: [],
  deleteMessage: () => null,
  username: '',
};

describe('should render properly', () => {
  // scrollIntoView is not implemented in jsdom.
  // https://github.com/jsdom/jsdom/issues/1695
  window.HTMLElement.prototype.scrollIntoView = () => null;

  test('should render messages', async () => {
    const props: IProps = {
      ...defaultProps,
      messages: [
        { message: 'foo', sender: 'bar' },
        { message: 'aly', sender: 'sson' },
      ],
    };
    const wrapper = mount(<ChatHistory {...props} />);
    const filter = wrapper.find(TextMessage);
    expect(filter).toHaveLength(props.messages.length);
  });

  test('should not show modal without deleting', async () => {
    const setDeleteIndex = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([-1, setDeleteIndex]);

    const wrapper = mount(<ChatHistory {...defaultProps} />);
    const modal = wrapper.find(ConfirmationModal);
    expect(modal).toHaveLength(0);
  });

  test('should show modal when deleting', async () => {
    const setDeleteIndex = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([1, setDeleteIndex]);

    const wrapper = mount(<ChatHistory {...defaultProps} />);
    const modal = wrapper.find(ConfirmationModal);
    expect(modal).toHaveLength(1);
  });
});

describe('should behave correctly', () => {
  const scrollIntoViewMock = jest.fn();
  // scrollIntoView is not implemented in jsdom.
  // https://github.com/jsdom/jsdom/issues/1695
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

  test('should scroll when sticky', async () => {
    scrollIntoViewMock.mockReset();
    const wrapper = mount(<ChatHistory {...defaultProps} />);
    const props = {
      ...defaultProps,
      messages: [{ sender: 'me', message: 'hello' }],
    };
    wrapper.setProps(props);
    expect(scrollIntoViewMock).toBeCalledTimes(2);
  });

  test('should not scroll when not sticky', async () => {
    scrollIntoViewMock.mockReset();

    const useStateMock = jest.fn();
    useStateMock.mockImplementation((state) => {
      switch (state) {
        case true:
          return [false, jest.fn()];
        default:
          return [state, useStateMock];
      }
    });

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const wrapper = mount(<ChatHistory {...defaultProps} />);
    const props = {
      ...defaultProps,
      messages: [{ sender: 'me', message: 'hello' }],
    };
    wrapper.setProps(props);
    expect(scrollIntoViewMock).toBeCalledTimes(0);
  });
});
