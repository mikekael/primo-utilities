import { expect, test } from "vitest";
import { data_get } from "./data";

test('data_get should return null when provided data is null or undefined', () => {
  const isNull = null;
  const isUndefined = undefined;

  expect(data_get(isNull, 'foo')).toBeNull();
  expect(data_get(isUndefined, 'foo')).toBeNull();
});
