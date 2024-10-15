class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

}

class Student extends Parent{
    constructor(name: string, age: number, address: string){
        super(name, age, address);
    }
    makeStudent() {
        console.log(`I am ${this.name} and I am ${this.age} years old. I live in ${this.address}`)
    }
}
const studentInfo = new Student('sajib', 24, 'Jashore')
studentInfo.makeStudent()

class Student1 extends Parent {
    desgination: string;
    constructor(name: string, age: number, address: string, desgination: string) {
        super(name, age, address);
        this.desgination = desgination; 
    }
    makeStudent2(): string {
       return `I am ${this.name} Hossen and age ${this.age} years old and I live in ${this.address} and I am a ${this.desgination}`;
    }
}

const studentInfo1 = new Student1('sajib', 24, 'Jashore', 'Frontend Developer');
console.log(studentInfo1.makeStudent2());
