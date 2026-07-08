  import { createServer } from "node:http";

  export function generateBlogHandler(body) {
    const link = (body && body.link) || "";
    if (!link) return { status: 400, json: { error: "Missing link" } };
    return { status: 200, json: { content: `# Blog for ${link}\n\nGenerated.` } };
  }

  createServer((req, res) => {
    if (req.method === "POST" && req.url === "/api/generate") {
      let raw = "";
      req.on("data", (c) => (raw += c));
      req.on("end", () => {
        const { status, json } = generateBlogHandler(JSON.parse(raw || "{}"));
        res.writeHead(status, { "Content-Type": "application/json" });
        res.end(JSON.stringify(json));
      });
      return;
    }
    res.writeHead(404);
    res.end();
  }).listen(3000);
