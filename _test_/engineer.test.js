const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Brad', '909481', 'bradleyhambrick@gmail.com', 'Brad-Hambrick');


test('test constructor values', () => {
    expect(engineer.name).toBe('Brad');
    expect(engineer.id).toBe('909481');
    expect(engineer.email).toBe('bradleyhambrick@gmail.com');
    expect(engineer.github).toBe('Brad-Hambrick');
});

test('test getName() method', () => {
    expect(engineer.getName()).toBe('Brad');
});

test('test getId() method', () => {
    expect(engineer.getId()).toBe('909481');
});

test('test getEmail() method', () => {
    expect(engineer.getEmail()).toBe('bradleyhambrick@gmail.com');
});

test('test getGitHub() method', () => {
    expect(engineer.getGitHub()).toBe('Brad-Hambrick');
});

test('test getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});