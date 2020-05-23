const fs = require("fs");
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')


test('See if office number is a Number', () => {
    const office = new Manager(50);
  
    expect(office.officeNumber).toEqual(expect.any(Number));
    
  });