// creating object 

const student1 = {
    name: "Idris Ismail",
    Age: 30,
    maritalStatus: "about to be married",
    Job: "NIN",

    description: function() {
        console.log(`My name is ${this.name}, i am ${this.Age} years old, i am also ${this.maritalStatus}, and i have a job at ${this.Job} `)

    }
}


const contact = {
    Email:  "IdrisISmail@gmail.com",
Address: "MAsaka"

}


student1.description()


function Car(make, model, year, code) {
    this.make = make 
    this.model = model,
    this.year = year,
    this.code = code
}

const car1 = new Car(2020, "ford", 2020, 1123)
console.log(car1)
console.log(car1.model)

//creating a class 

class Product{
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    displayproduct() {
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price}`)
    }
}

const product1 = new Product("fish", 30)

product1.displayproduct()