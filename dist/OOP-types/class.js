"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    #age = 10;
    name;
    species;
    sound;
    constructor(name, species, sound) {
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
    name;
    ingredients;
    // public name:string;
    // public ingredients:string;
    constructor(
    // Parameter properties
    name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        // this.name = name
        // this.ingredients = ingredients
    }
}
const powaPitha = new Pitha("powa", "tel");
console.log(powaPitha.ingredients);
//# sourceMappingURL=class.js.map