// Checks if a given value is considered blank
export const blank = <T = any>(value: T): boolean => {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && value.trim().length === 0) {
    return true;
  }

  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'number' && isNaN(value)) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (_isPlainObject(value)
    && Object.keys(value).length === 0
  ) {
    return true;
  }

  return false;
};

const _isPlainObject = (value: any): boolean => {
  if (value === null || value === undefined || typeof value !== 'object') {
    return false;
  }

  try {
    const proto = Object.getPrototypeOf(value);

    return proto === null || proto === Object.prototype;
  } catch {
    return false;
  }
};

// Checks if a given value is considered filled.
export const filled = <T = any>(value: T): boolean => !blank(value);

export type OptionalValue<V> = V | null | undefined;

export const is_callable = (value: any): value is CallableFunction => {
  if (blank(value)) {
    return false;
  }

  return typeof value === 'function';
};
