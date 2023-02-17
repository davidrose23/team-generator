const Engineer = require('../lib/Engineer.js');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github username", () => {
            const engineer = new Engineer("John", 1, "john@test.com", "john-github");

            expect(engineer.name).toEqual("John");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("john@test.com");
            expect(engineer.github).toEqual("john-github");
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's github username", () => {
            const engineer = new Engineer("John", 1, "john@test.com", "john-github");

            expect(engineer.getGithub()).toEqual("john-github");
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const engineer = new Engineer("John", 1, "john@test.com", "john-github");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
