export class Person {
  
  public name: string;
  public address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const iroman = new Person('Tony Stark', 'New York');
console.log(iroman);