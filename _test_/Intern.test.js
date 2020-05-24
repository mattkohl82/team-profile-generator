const Intern = require('../lib/Intern')

test('Check to see if school name is a String', () =>{
    const schoolName = new Intern('Matthew', 6, 'mattkohl82@gmail.com', 'Harvard' )

    expect(schoolName.name).toEqual(expect.any(String));
    expect(schoolName.id).toEqual(expect.any(Number));
    expect(schoolName.email).toEqual(expect.any(String));
    expect(schoolName.school).toEqual(expect.any(String));
})