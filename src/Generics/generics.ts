// Generic Functions
function genericfunction<T>(x: T): T {
  let y: T; //will make y of type T
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T; //function with parm of type t and return of the type t
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic Classes
class GenericClass<P> {
  constructor(public props: P) {}
  getProps(): P {
    return this.props;
  }

  //Cant use generic types for static props nor methods
  // static a:P;
}

interface Expirable {
  expireDate: Date;
}
interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCakes: ChocolateCake[] = [{ expireDate: new Date() }];

const vanillaCakes: VanillaCake[] = [{ expireDate: new Date() }];

const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expireDate.getDate() < currentDate);
};

const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);

export function runGenerics() {
  console.log("\nrunGenerics");
  console.log("expiredChocoCakes", expiredChocoCakes);
  console.log("expiredVanillaCakes", expiredVanillaCakes);
}
