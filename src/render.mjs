export function renderWelcome(user) {
  return `Welcome back, ${user.profile.displayName}!`;
}

export function renderFooter() {
  return `© ${new Date().getFullYear()} Acme Portal`;
}
