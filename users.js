const users = ["matt"];
<<<<<<< HEAD
users.push("Nate", "Alissa", "Elie", "Joel", "Tim");

const yellingUsers = users.map(u => u.toUpperCase());

const r14Instructors = users.slice(0, 3);
const r15Instructors = users.slice(3);

module.exports = { users, yellingUsers, r14Instructors, r15Instructors };
=======
users.push("Nate", "Alissa", "someone else");

const yellingUsers = users.map(u => u.toUpperCase());

const randomThing = Math.random();
console.log("this is a weird feature");

module.exports = { users, yellingUsers };
>>>>>>> master
