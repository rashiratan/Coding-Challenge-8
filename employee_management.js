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

class Department {
    constructor(name){
        this.name = name;
        this.employees = []; //intiliazing employees array within department object
    }
    addEmployee(employee) {
        this.employees.push(employee); //adding employees
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
        //using reduce to find sum of all salaries
    }
}