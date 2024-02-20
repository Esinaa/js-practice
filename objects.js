// classes

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(this.name + 'speak');
    }
}

class Man extends Human {
    
}
let man = new Man('Quame');
console.log(man.talk());
