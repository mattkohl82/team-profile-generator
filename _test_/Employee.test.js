const fs = require("fs");
const Employee = require('../lib/Employee')


test('check to see if name, id, and email are strings', () => {

    const person = new Employee ('Matthew', 5, 'mk@gmail.com')

    expect(person.name).toEqual(expect.any(String))
    expect(person.id).toEqual(expect.any(Number))
    expect(person.email).toEqual(expect.any(String))
})