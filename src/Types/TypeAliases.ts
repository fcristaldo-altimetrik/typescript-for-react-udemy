type Alias1 = string | string[] | null;
type Alias2 = { a: number } & { b: number };

type Alias3<T> = T[];
//used as interfaces

type Alias4 = {
  a: number;
  b: number;
};
// creates a name that references an shape of an object
// with interfaces we create a new type
