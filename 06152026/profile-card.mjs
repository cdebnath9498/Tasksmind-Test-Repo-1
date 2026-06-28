  function initials(name) {
    return name.split(" ").map((p) => p[0]).join("").toUpperCase();
  }


  function renderCard(user) {
    const handle = user.social.handle;
    return `${initials(user.name)} — @${handle}`;
  }
  function renderDirectory(users) {
    return users.map(renderCard).join("\n");
  }

  setTimeout(() => {
    const users = [
      { name: "Grace Hopper", social: { twitter: "graceh" } },
      { name: "Alan Turing" },
    ];
    console.log(renderDirectory(users));
  }, 400);
