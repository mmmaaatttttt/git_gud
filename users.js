const users = ["matt"];
users.push("Nate", "Alissa");

const yellingUsers = users.map(u => u.toUpperCase());

module.exports = { users, yellingUsers };
