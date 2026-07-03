  export function isHealthy(checks) {
    return checks.every((c) => c.ok === true);
  }

  export function summarize(checks) {
    const healthy = checks.filter((c) => c.ok).length;
    return `${healthy}/${checks.length} healthy`;
  }
