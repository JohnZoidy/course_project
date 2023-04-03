import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional calss', () => {
    expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(
      'someClass cls1 cls2'
    );
  });
  test('with additional calss and mods', () => {
    expect(
      classNames('someClass', { cls4: false, cls3: true, cls5: undefined }, [
        'cls1',
        'cls2'
      ])
    ).toBe('someClass cls1 cls2 cls3');
  });
});
