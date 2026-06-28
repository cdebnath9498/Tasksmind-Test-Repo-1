const USERS = [
  { id: 42, email: "investor@example.com" },
  { id: 7, email: "founder@example.com", profile: { displayName: "Sam Founder" } },
];

export function findUser(id) {
  return USERS.find((u) => u.id == id);
}
