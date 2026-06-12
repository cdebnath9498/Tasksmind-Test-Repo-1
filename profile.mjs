function initials(user) { return user.name?.first?.[0]; }
setTimeout(() => console.log(initials({ id: 3 })), 400);
