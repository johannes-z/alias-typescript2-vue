import BaseClass from "./BaseClass";

export default class ChildClass extends BaseClass {
  protected name: string = 'Test'

  constructor() {
    super()
    console.log(this.name);
    console.log(this.getName());
  }
}