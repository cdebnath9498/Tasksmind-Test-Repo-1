  import { describe, it, expect } from "vitest";
  import { isHealthy, summarize } from "../status.mjs";

  describe("status helpers", () => {
    it("reports healthy when every check passes", () => {
      expect(isHealthy([{ ok: true }, { ok: true }])).toBe(true);
    });

    it("reports unhealthy when any check fails", () => {
      expect(isHealthy([{ ok: true }, { ok: false }])).toBe(false);
    });

    it("summarizes the healthy ratio", () => {
      expect(summarize([{ ok: true }, { ok: false }])).toBe("1/2 healthy");
    });
  });
