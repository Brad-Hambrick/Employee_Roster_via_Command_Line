// Testing for GetResponses.js

const getResponses = require('../lib/GetResponses')
const getresponses = new getResponses('Brad', '909481', 'bradleyhambrick@gmail.com');


test('test constructor values', () => {
    expect(getresponses.name).toBe('Brad');
    expect(getresponses.id).toBe('909481');
    expect(getresponses.email).toBe('bradleyhambrick@gmail.com');
});

test('test getName() method', () => {
    expect(getresponses.getName()).toBe('Brad');
});

test('test getId() method', () => {
    expect(getresponses.getId()).toBe('909481');
});

test('test getEmail() method', () => {
    expect(getresponses.getEmail()).toBe('bradleyhambrick@gmail.com');
});

test('test getRole() method', () => {
    expect(getresponses.getRole()).toBe('Team Member');
});