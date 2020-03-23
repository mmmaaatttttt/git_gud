const users = ["matt"];
users.push("Nate", "Alissa", "someone else");

const yellingUsers = users.map(u => u.toUpperCase());

const randomThing = Math.random();
console.log("this is a weird feature");

module.exports = { users, yellingUsers };
