const fs = require("fs");
const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')


test('Check to see if github name is a String', () =>{
    const hubName = new Engineer( 'Mattkohl82' )

    expect(hubName.github).toEqual(expect.any(String))
})