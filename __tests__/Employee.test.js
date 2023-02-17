const Employee = require('../lib/Employee.js');
describe('Employee', () => {
    it('should create a new Employee object', () => {
        const employee = new Employee('John', 1, 'john@example.com');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('john@example.com');
    });

    it('should return the name of the Employee', () => {
        const employee = new Employee('John', 1, 'john@example.com');

        expect(employee.getName()).toEqual('John');
    });

    it('should return the id of the Employee', () => {
        const employee = new Employee('John', 1, 'john@example.com');

        expect(employee.getId()).toEqual(1);
    });

    it('should return the email of the Employee', () => {
        const employee = new Employee('John', 1, 'john@example.com');

        expect(employee.getEmail()).toEqual('john@example.com');
    });

    it('should return the role of the Employee', () => {
        const employee = new Employee('John', 1, 'john@example.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});
