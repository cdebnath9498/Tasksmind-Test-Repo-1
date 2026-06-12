  const ROLE_LEVEL = { viewer: 1, editor: 2, admin: 3 };
  function canEdit(session) {
    return ROLE_LEVEL[session.member.role] >= ROLE_LEVEL.editor;   
  }
  export function gateRequests(sessions) {
    return sessions.map((s) => `${s.id}: ${canEdit(s) ? "allow" : "deny"}`).join("\n");
  }
  setTimeout(() => console.log(gateRequests([
    { id: "s1", member: { role: "admin" } },
    { id: "s2" },                                             
  ])), 400);
