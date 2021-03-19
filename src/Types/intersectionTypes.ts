interface IA {
  a: number;
}

interface IB {
  b: number;
}

function X(obj: IA & IB) {
  // We combine both interfaces
  return obj.a + obj.b;
}

function combine<ObjA extends Object, ObjB extends Object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB {
  return { ...objA, ...objB };
}

const a = { a: 2 };
const b = { b: 2 };
const c = combine(a, b);
