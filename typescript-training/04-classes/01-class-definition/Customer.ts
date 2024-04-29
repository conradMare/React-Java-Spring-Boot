class Customer {

    firstName: string;
    lastName: string;

    // Define a constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Create an instance
// let myCustomer = new Customer();

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);

// Use the constructor
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);