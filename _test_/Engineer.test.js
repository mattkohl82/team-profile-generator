const fs = require("fs");
const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')


test('Check to see if github name is a String', () =>{
    const hubName = new Engineer('Mattkohl82', 1, 'mattkohl82@gmail.com', 'mattkohl82')

    expect(hubName.name).toEqual(expect.any(String))
    expect(hubName.id).toEqual(expect.any(Number))
    expect(hubName.github).toEqual(expect.any(String))
    expect(hubName.github).toEqual(expect.any(String))
})