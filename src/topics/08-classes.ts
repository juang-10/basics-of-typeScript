export class Person {
  // Pueden definirse los atributos de la clase en el constructor
  // y asignarles un valor por defecto
  
  // public name: string;
  // public address: string;

  constructor(
    public name: string, 
    public address: string
  ) {}
}

const iroman = new Person("Tony Stark", "New York");
console.log(iroman);
