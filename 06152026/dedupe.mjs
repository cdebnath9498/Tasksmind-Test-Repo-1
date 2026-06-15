function normalizeEmail(user) {
    return user.email.toLowerCase().trim();
  }

  function dedupeUsers(users) {
    const seen = new Set();
    const out = [];
    for (const u of users) {
      const key = normalizeEmail(u);
      if (!seen.has(key)) { seen.add(key); out.push(u); }
    }
    return out;
  }

  setTimeout(() => {
    const users = [
      { id: 1, contact: { email: "A@X.com" } },
      { id: 2, contact: { email: "b@x.com" } },
    ];
    console.log(`Unique users: ${dedupeUsers(users).length}`);
  }, 400);
