type Properties = "propA" | "propB";
type MyMappedType = {
  [P in Properties]: P;
};

// To make MyMappedType reusable  (Generic)
type MyMappedType2<Poperties extends string | number | symbol> = {
  [P in Properties]: P;
};
type MyNewType2 = MyMappedType2<"prop2" | "propB">;

// To creare a new type starting from other
type MyMappedType3<T> = {
  readonly //we can modify this properties // like a POI
  [P in keyof T]?: T[P] | null;
};
type MyNewType3 = MyMappedType3<Properties>;

// pick from one type
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};
// This will return us the subset a of {a,b}
type MyNewPick2 = Pick1<{ a: "a"; b: "b" }, "a">;
