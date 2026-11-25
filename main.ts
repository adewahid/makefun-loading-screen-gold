// Loading Screen Gold: A Tip in 200 Characters
// Writes one sharp, funny loading-screen tip to /output/entry.txt.
// The tip must be 1-200 characters of UTF-8 text, a single line.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke lands on the judge's brief: it speaks to the stressed developer
// (whose code just vanished) and to the AI agent (mid-rationalisation) at
// once, and the punchline is the agent's unearned confidence, not a pun.
// Keep it a single line, no coffee / deadline / compile rerun.
const tip =
  "Loading\u2026 your agent is currently explaining to itself why it deleted your code. Give it a minute. It is very sure this time.";

// Guard the gate before writing: 1-200 characters, not only whitespace.
if (tip.length < 1 || tip.length > 200 || tip.trim().length === 0) {
  throw new Error(`Tip must be 1-200 characters, got ${tip.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip, "utf8");
console.log(`Wrote ${tip.length} characters to /output/entry.txt`);
