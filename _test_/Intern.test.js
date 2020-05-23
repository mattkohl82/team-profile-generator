const fs = require("fs");
const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test('Check to see if school name is a String', () =>{
    const schoolName = new Intern( 'Harvard' )

    expect( schoolName.school).toEqual(expect.any(String))
})