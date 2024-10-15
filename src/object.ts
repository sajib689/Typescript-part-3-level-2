class Animal {
    name: string;
    species: string;
    sounds: string;
    constructor(name: string, species: string, sounds: string) {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    makeSound () {
        console.log(`The name ${this.name} says ${this.species}`)
    }
}

const dog = new Animal('German Shapred', 'dog', 'Ghew Ghew');
