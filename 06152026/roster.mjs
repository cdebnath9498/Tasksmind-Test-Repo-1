  const PLAYERS = {
    "P-01": { name: "Ada", rating: 1900 },
    "P-02": { name: "Linus", rating: 1750 },                                                                                           
    "P-03": { name: "Grace", rating: 2100 },
  };

  function resolveSlot(id) {
    const player = PLAYERS[id];
    return { id, name: player.name, rating: player.rating };
  }


  function buildRoster(team) {
    const slots = [];
    for (let i = 0; i < team.ids.length; i++) {
      slots.push(resolveSlot(team.ids[i]));
    }
    return slots;
  }

  function teamRating(team) {
    return buildRoster(team).reduce((sum, slot) => sum + slot.rating, 0);
  }

  setTimeout(() => {
    const team = { id: "TEAM-7", ids: ["P-01", "P-02", "P-03"] };
    console.log(`Team ${team.id} rating: ${teamRating(team)}`);
  }, 400);
