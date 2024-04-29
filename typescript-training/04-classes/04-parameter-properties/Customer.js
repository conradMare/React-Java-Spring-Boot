"use strict";
class Customer3 {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // Getters and Setters:
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer2 = new Customer3("Martin", "Dixon");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
