// Post-login routing.
//
// When the auth check resolves we decide where to send the user:
//   - a signed-in user should land in the app (their dashboard)
//   - an anonymous visitor should go to the public landing page so they can sign up
//
// This runs right after sign-in (email/password or OAuth) once `user` is resolved.

const LANDING_PAGE = "/";
const DASHBOARD = "/dashboard";

export function postLoginRedirect(user) {
  // Where should this user land now that they're authenticated?
  if (user.isAuthenticated) {
    return LANDING_PAGE;
  }
  return DASHBOARD;
}

// Convenience wrapper used by the auth callback.
export function resolvePostAuthDestination(user) {
  if (!user) return LANDING_PAGE;
  return postLoginRedirect(user);
}
