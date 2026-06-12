export function renderWelcome(user) {
  return `Welcome back, ${user.profile?.displayName ?? user.email}!`;
}

export function renderFooter() {
  return `© ${new Date().getFullYear()} Acme Portal`;
}
