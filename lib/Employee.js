// Importing the required dependencies
import inquirer from 'inquirer';
import validator from 'email-validator';


// Employee class definition
class Employee {
    // Constructor for Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method that returns the name of the employee
    getName() {
        return this.name;
    }

    // Method that returns the ID of the employee
    getId() {
        return this.id;
    }

    // Method that returns the email address of the employee
    getEmail() {
        return this.email;
    }

    // Method that returns the role of the employee, which is "Employee"
    getRole() {
        return 'Employee';
    }

    // Method that prompts the user for the employee's name, ID, and email address
    static async promptUser() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: (input) => input.trim() !== '',
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?",
                validate: (input) => /^\d+$/.test(input.trim()),
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email address?",
                validate: (input) => validator.validate(input.trim()),
            },
        ];

        const answers = await inquirer.prompt(questions);
        return new Employee(answers.name, answers.id, answers.email);
    }
}

// Exporting the Employee class
export default Employee;


