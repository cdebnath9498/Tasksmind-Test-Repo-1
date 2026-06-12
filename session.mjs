function currentRole(session) { return session.user?.role; }
setTimeout(() => console.log(currentRole({ token: "abc" })), 400);
