import { blank, OptionalValue } from "./common";

type Primitive = string | number | boolean | null | undefined | symbol | bigint;
type IsPlainObject<T> = T extends Primitive | Function ? false : T extends Array<any> ? false : T extends object ? true : false;

type ArrayKey<T> = T extends Array<infer U>
  ? `${number}` | (U extends object ? `${number}.${Paths<U>}` : never)
  : never;

type Paths<T> = T extends Primitive
  ? never
  : T extends Array<infer U>
  ? ArrayKey<T>
  : {
    [K in Extract<keyof T, string>]: IsPlainObject<T[K]> extends true
    ? K | `${K}.${Paths<T[K]>}`
    : K
  }[Extract<keyof T, string>];

type PathValue<T, P extends string> =
  P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
  ? PathValue<T[K], Rest>
  : K extends `${number}`
  ? T extends Array<infer U>
  ? PathValue<U, Rest>
  : null
  : P extends keyof T
  ? T[P]
  : P extends `${number}`
  ? T extends Array<infer U> ? U : null
  : null : null;

export const data_get = <D, K = Paths<D>>(data: D, path: K, opts: {
  default_value?: () => OptionalValue<PathValue<D, Extract<K, string>>>;
} = {}): OptionalValue<PathValue<D, Extract<K, string>>> => {
  if (blank(data)) {
    return null;
  }

  const paths = Array.isArray(path) ? path : String(path).split('.').filter(Boolean);

  let value: any = data;

  for (const path of paths) {
    const key = /^\d+$/.test(path) ? Number(path) : path;

    value = value[key as any];
  }

  if (blank(value) && opts.default_value) {
    return opts.default_value();
  }

  return value;
}
