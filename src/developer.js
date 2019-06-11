'use strict';
//Developer start

console.log("class Developer");
export const developer = class Developer {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    // displayInfo () {
    //     return (this.name + ", " + this.age + ", " + this.dateOfBirth);
    // }
};

export const developerVanya = new Developer('Ваня', 36, '23/04/1984');
developerFirst();
//Developer end