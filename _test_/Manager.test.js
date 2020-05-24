const Manager = require('../lib/Manager')

test('See if office number is a Number', () => {
    const office = new Manager('matthew', 6, 'mattkohl82@gmail', 9);
  
    expect(office.name).toEqual(expect.any(String));
    expect(office.id).toEqual(expect.any(Number));
    expect(office.email).toEqual(expect.any(String));
    expect(office.number).toEqual(expect.any(Number));
    
  });