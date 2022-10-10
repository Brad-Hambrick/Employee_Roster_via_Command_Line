const Intern = require('../lib/Intern')
const intern = new Intern('Brad', '909481', 'bradleyhambrick@gmail.com', '3723')


test('test constructor values', () => {
    expect(intern.name).toBe('Brad');
    expect(intern.id).toBe('909481');
    expect(intern.email).toBe('bradleyhambrick@gmail.com');
    expect(intern.officeNumber).toBe('3723');
});

test('test getName() method', () => {
    expect(intern.getName()).toBe('Brad');
});

test('test getId() method', () => {
    expect(intern.getId()).toBe('909481');
});

test('test getEmail() method', () => {
    expect(intern.getEmail()).toBe('bradleyhambrick@gmail.com');
});

test('test getOfficeNumber() method', () => {
    expect(intern.getOfficeNumber()).toBe('3723');
});

test('test getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});