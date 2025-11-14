class Animal {
  #age: number = 10;
  name;
  species;
  sound;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("dog", "pet", "barking");
const cat = new Animal("cat", "pet", "mew mew");

//  dog.makeSound()
//  cat.makeSound()

class Pitha {
  // public name:string;
  // public ingredients:string;

  constructor(
    // Parameter properties
    public name: string,
    public ingredients: string
  ) {
    // this.name = name
    // this.ingredients = ingredients
  }
}

const powaPitha = new Pitha("powa", "tel");

console.log(powaPitha.ingredients);
