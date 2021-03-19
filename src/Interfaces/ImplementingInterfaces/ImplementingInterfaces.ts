import { Child } from "../Interfaces";

export class ChildImp implements Child {
  x: string = "";
  y: string = "";
  z: string = "";
  constructor(x: string, y: string, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getCoorditates() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
export class ChildImp2 implements Child {
  x: string = "";
  y: string = "";
  z: string = "";
  constructor(x: string, y: string, z: string) {
    this.x = x + " 2";
    this.y = y + " 2";
    this.z = z + " 2";
  }
  getCoorditates() {
    return { x: this.x, y: this.y, z: this.z };
  }
  getChild2Coordinates() {
    return { x: this.x, y: this.y, z: this.z };
  }
}

const child: ChildImp = new ChildImp("", "", "");

// Describing classes using interfaces
interface ChildConstructor<T> {
  new (x: string, y: string, z: string): T;
}

function createchild<T extends Child>(
  ChildImp: ChildConstructor<T>,
  x: string,
  y: string,
  z: string
) {
  const child = new ChildImp(x, y, z);
  return child;
}

export function runImplementingInterfaces() {
  console.log("\nrunImplementingInterfaces");

  console.log("child.getCoorditates()", child.getCoorditates());

  const child1 = createchild(ChildImp, "2", "3", "4");
  const child2 = createchild(ChildImp2, "2", "3", "4");
  console.log("child1.getCoorditates()", child1.getCoorditates());
  console.log("child2.getCoorditates()", child2.getCoorditates());
  console.log("child2.getChild2Coordinates()", child2.getChild2Coordinates());
}
