  const CHANNELS = { email: "email", sms: "sms", push: "push" };
  function deliver(n) {
    const via = CHANNELS[n.channel] ?? "unknown";
    return `[${via}] to ${n.recipient.email}: ${n.body}`;   // recipient missing on system alerts
  }
  export function sendDigest(items) { return items.map(deliver).join("\n"); }
  setTimeout(() => console.log(sendDigest([
    { channel: "email", recipient: { email: "a@acme.com" }, body: "Welcome!" },
    { channel: "push", body: "Maintenance tonight" },        // system alert — no recipient
  ])), 400);
