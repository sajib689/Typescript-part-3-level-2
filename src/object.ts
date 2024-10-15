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
dog.makeSound();

class PersonalInfo {
    name: string;
    age: number;
    education: string;
    results: number;
    constructor(name: string, age: number, education: string, results: number) {
        this.name = name;
        this.age = age;
        this.education = education;
        this.results = results;
    }
    makePersonalInfo () {
        console.log(`He is ${this.name} and age ${this.age} have ${this.education} and the result is ${this.results}`)
    }
}

const man = new PersonalInfo('sajib', 24, 'BA', 4.28)
man.makePersonalInfo()