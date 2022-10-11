const teamLeader = require('../lib/TeamLeader');
const TeamLeader = new teamLeader('Brad', '909481', 'bradleyhambrick@gmail.com', '3723')


test('test constructor values', () => {
    expect(TeamLeader.name).toBe('Brad');
    expect(TeamLeader.id).toBe('909481');
    expect(TeamLeader.email).toBe('bradleyhambrick@gmail.com');
    expect(TeamLeader.officeNumber).toBe('3723');
});

test('test getName() method', () => {
    expect(TeamLeader.getName()).toBe('Brad');
});

test('test getId() method', () => {
    expect(TeamLeader.getId()).toBe('909481');
});

test('test getEmail() method', () => {
    expect(TeamLeader.getEmail()).toBe('bradleyhambrick@gmail.com');
});

test('test getOfficeNumber() method', () => {
    expect(TeamLeader.getOfficeNumber()).toBe('3723');
});

test('test getRole() method', () => {
    expect(TeamLeader.getRole()).toBe('Team Leader');
});