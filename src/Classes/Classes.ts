class Robot {
  name: string;
  constructor(name: string) {
    this.name = name;
    this.gender = "thing";
  }
  askName() {
    console.log(`My name is ${this.name}`);
  }
  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }

  //properties are public by default, but can be priveta
  // a private property can be accessed just inside the class definition with this.prop
  private somethingElse: String = "somethingElse";

  // a protected property allows its subclasses to access it
  // but we cant access it from outside (like private)
  protected age: number = 1;

  //making readonly props, we cant change them after constructor
  readonly gender: string = "";

  // getter and setter
  get rName() {
    return this.name;
  }
  set rName(name: string) {
    this.name = name;
  }
}

class FlyingRobot extends Robot {
  jetpackSize: number;
  //overwrite
  constructor(name: string, jetpackSize: number) {
    super(name); //parent constructor
    this.jetpackSize = jetpackSize;
  }

  //overwrite
  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance); //parent method
  }
}

export function runClasses() {
  console.log("\nrunClasses");
  const robot = new Robot("John");
  robot.askName();

  const fly = new FlyingRobot("bird", 2);
  fly.move(20);
  //Cant do this
  //console.log(fly.somethingElse)

  //using getter and setter
  console.log("robot name before changing", robot.rName);
  //setter
  robot.rName = "othername";
  //getter
  console.log("robot name after changing", robot.rName);
}
