const Manager = require('../lib/Manager.js');


describe('Manager', () => {
  it('should create a new Manager object', () => {
    const manager = new Manager('John', 1, 'john@example.com', 101);

    expect(manager.name).toEqual('John');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('john@example.com');
    expect(manager.officeNumber).toEqual(101);
  });

  it('should return the role of the Manager', () => {
    const manager = new Manager('John', 1, 'john@example.com', 101);

    expect(manager.getRole()).toEqual('Manager');
  });

  it('should return the office number of the Manager', () => {
    const manager = new Manager('John', 1, 'john@example.com', 101);

    expect(manager.getOfficeNumber()).toEqual(101);
  });
});
