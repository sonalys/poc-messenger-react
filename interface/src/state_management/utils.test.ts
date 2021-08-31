import { Message } from 'entities/Message';
import * as utils from './utils';

describe('removeIndex should work', () => {
  test('should remove first elem successfuly', async () => {
    const a = [1, 2, 3];
    const result = utils.removeIndex(a, 0);
    expect(result).toEqual([2, 3]);
  });

  test('should remove middle elem successfuly', async () => {
    const a = [1, 2, 3];
    const result = utils.removeIndex(a, 1);
    expect(result).toEqual([1, 3]);
  });

  test('should remove last elem successfuly', async () => {
    const a = [1, 2, 3];
    const result = utils.removeIndex(a, 2);
    expect(result).toEqual([1, 2]);
  });
});

describe('filterPendingMessages should work', () => {
  test('should remove only pending: true', async () => {
    const list: Message[] = [
      { pending: true, message: 'foo/bar', sender: 'me' },
      { pending: false, message: 'foo/bar', sender: 'me' },
      { message: 'foo/bar', sender: 'me' }
    ];

    const result = utils.filterPendingMessages(list);
    expect(result).toStrictEqual(list.slice(1));
  });
});