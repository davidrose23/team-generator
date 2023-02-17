const Intern = require('../lib/Intern.js');


describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("John", 1, "john@test.com", "UC Berkeley");

            expect(intern.name).toEqual("John");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("john@test.com");
            expect(intern.school).toEqual("UC Berkeley");
        });
    });

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const intern = new Intern("John", 1, "john@test.com", "UC Berkeley");

            expect(intern.getSchool()).toEqual("UC Berkeley");
        });
    });

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern("John", 1, "john@test.com", "UC Berkeley");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
