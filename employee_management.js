//task 1
class Employee {
    //initializing required properties of object
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    //creating the getDetails method for class
    getDetails() {
    console.log(`Employee's name: ${this.name}\n Position: ${this.position} \n Salary: $${this.salary}`);
    }
}