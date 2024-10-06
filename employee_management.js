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

//task2
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
    //task 4
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => (employee.bonus ? total + employee.salary + employee.bonus : total+employee.salary), 0);
        //using ternary operators to add bonus if exists
    }
}

//task3
class Manager extends Employee{
    constructor(name, salary, position, department, bonus){ //initializing values for this class
        super(name, salary, position, department); //calling frrom parent class employee
        this.bonus = bonus;
    }
    getDetails() { //override employee method for manager
        console.log(`Employee's name: ${this.name}\n Position: ${this.position} \n Salary: $${this.salary} \n Bonus: $${this.bonus}`); 
    }
}
