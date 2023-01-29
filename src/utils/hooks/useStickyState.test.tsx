import { renderHook } from '@testing-library/react';
import { useStickyState } from './useStickyState';

const KEY = 'key';
const setUp = (defaultValue: number) =>
  renderHook(({ defaultValue, key }) => useStickyState(defaultValue, key), {
    initialProps: { defaultValue, key: KEY }
  });

describe('[hooks]', () => {
  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should return defaultValue from localStorage', () => {
    const localStorageValue = 0;
    const { result } = setUp(localStorageValue);
    const [state] = result.current;

    expect(localStorage.getItem(KEY)).toBe(state.toString());
  });

  it('should return value from localStorage', () => {
    const localStorageValue = 100;
    localStorage.setItem(KEY, JSON.stringify(localStorageValue));

    const { result } = setUp(localStorageValue);
    const [state] = result.current;

    expect(localStorage.getItem(KEY)).toBe(state.toString());
  });
});
