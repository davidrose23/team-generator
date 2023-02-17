// Import the Employee class
import Employee from './Employee.js';
// Manager class definition
class Manager extends Employee {
  // Constructor for Manager class
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the Employee class
    super(name, id, email);

    // Set the office number property
    this.officeNumber = officeNumber;
  }

  // Method that returns the role of the employee, which is "Manager"
  getRole() {
    return 'Manager';
  }

  // Method that returns the office number of the manager
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export the Manager class
export default Manager;
