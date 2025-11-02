import { expect, test } from 'vitest';
import { blank, filled, is_callable } from './common';

test('blank should return true when value is null and undefined', () => {
  const isNull = null;
  const isUndefined = undefined;

  expect(blank(isNull)).toBeTruthy();
  expect(blank(isUndefined)).toBeTruthy();
});

test('blank should return true when valus is an empty string', () => {
  const isEmptyString = '';
  const isSpaceOnly = ' ';

  expect(blank(isEmptyString)).toBeTruthy();
  expect(blank(isSpaceOnly)).toBeTruthy();
});

test('blank should return false when value is a boolean', () => {
  const isTrue = true;
  const isFalse = true;

  expect(blank(isTrue)).toBeFalsy();
  expect(blank(isFalse)).toBeFalsy();
});

test('blank should return true when value is not a number', () => {
  const isNaN = NaN;

  expect(blank(isNaN)).toBeTruthy();
});

test('blank should return true when value is an empty array', () => {
  const isEmptyArr = <any>[];

  expect(blank(isEmptyArr)).toBeTruthy();
});

test('blank should return false when value is a class', () => {
  class MyClass { }

  const isAClass = new MyClass();

  expect(blank(isAClass)).toBeFalsy();
});

test('blank should return false when value is a function', () => {
  const isAFunc = () => { };

  expect(blank(isAFunc)).toBeFalsy();
});

test('blank should return true when value is an empty object', () => {
  const isAnEmptyObj = {};

  expect(blank(isAnEmptyObj)).toBeTruthy();
});

test('filled should return true when value is not a undefined or null', () => {
  const isSomething = 'something';

  expect(filled(isSomething)).toBeTruthy();
});

test('filled should return true when a string contains atleast 1 character', () => {
  const hasSpaceBefore = ' a';
  const hasSpaceAfter = 'a ';
  const isCharacterOnly = 'a';
  const isASentence = 'lorem ipsum';

  expect(filled(hasSpaceBefore)).toBeTruthy();
  expect(filled(hasSpaceAfter)).toBeTruthy();
  expect(filled(isCharacterOnly)).toBeTruthy();
  expect(filled(isASentence)).toBeTruthy();
});

test('filled should return true for boolean values', () => {
  const isTrue = true;
  const isFalse = false;

  expect(filled(isTrue)).toBeTruthy();
  expect(filled(isFalse)).toBeTruthy();
});

test('filled should return true if a value is a number', () => {
  const isTinyNumber = 1;
  const isSmallNumber = 100;
  const isNegativeNumber = -1;
  const isZero = 0;
  const isPie = Math.PI;

  expect(filled(isTinyNumber)).toBeTruthy();
  expect(filled(isSmallNumber)).toBeTruthy();
  expect(filled(isNegativeNumber)).toBeTruthy();
  expect(filled(isZero)).toBeTruthy();
  expect(filled(isPie)).toBeTruthy();
});

test('filled should return true is an array with any element', () => {
  const isArrayWithNumbers = [1, 2, 3];
  const isArrayWithStrings = ['a', 'b', 'c'];
  const isArrayWithMixedValues = [1, '2', {}, () => { }];
  const isArrayWithNulls = [null, undefined];

  expect(filled(isArrayWithNumbers)).toBeTruthy();
  expect(filled(isArrayWithStrings)).toBeTruthy();
  expect(filled(isArrayWithMixedValues)).toBeTruthy();
  expect(filled(isArrayWithNulls)).toBeTruthy();
});

test('filled should return true when value is a class', () => {
  class MyClass { }

  const isAClass = new MyClass();

  expect(filled(isAClass)).toBeTruthy();
});

test('filled should return true when value is a function', () => {
  const isAFunc = () => { };

  expect(filled(isAFunc)).toBeTruthy();
});

test('filled should return true when value is not an empty object', () => {
  const isOneDimensionalObject = {
    foo: "bar",
    fruits: ["apple", "banana"],
    isUndefined: undefined,
    isNull: null,
  };

  const isNestedObject = {
    child: {
      foo: "bar",
      fruits: ["apple", "banana"],
      isUndefined: undefined,
      isNull: null,
      grandchild: {
        foo: "bar",
        fruits: ["apple", "banana"],
        isUndefined: undefined,
        isNull: null,
      }
    }
  };

  expect(filled(isOneDimensionalObject)).toBeTruthy();
  expect(filled(isNestedObject)).toBeTruthy();
});

test('is_callable should return false when value is null or undefined', () => {
  const isNull = null;
  const isUndefined = undefined;

  expect(is_callable(isNull)).toBeFalsy();
  expect(is_callable(isUndefined)).toBeFalsy();
});

test('is_callable should return true when value is a function', () => {
  class MyClass {
    foo(): void { }
  }

  const isAMethod = (new MyClass).foo;
  const isSimpleFunc = () => { };

  expect(is_callable(isAMethod)).toBeTruthy();
  expect(is_callable(isSimpleFunc)).toBeTruthy();
});
